import {
  Modl,
  ModlArray,
  ModlBoolNull,
  ModlFloat,
  ModlInteger,
  ModlMap,
  ModlPair,
  ModlPrimitive,
  ModlQuoted,
  ModlString,
  ModlStructure,
  ModlValue
} from './Model';
import { Token, tokeniser, TokenType } from './MODLTokeniser';
import { TokenStream } from './TokenStream';

export const parser = (s: string): Modl => {
  const tokens = tokeniser(s);

  const root: ModlStructure[] | ModlPrimitive = parse(new TokenStream(tokens));

  return new Modl(root);
};

const parse = (s: TokenStream): ModlStructure[] | ModlPrimitive => {
  const rootPrimitive: ModlPrimitive | null = parsePrimitive(s);
  if (rootPrimitive !== null) {
    return rootPrimitive;
  }
  return parseStructures(s);
};

const parsePrimitive = (s: TokenStream): ModlPrimitive | null => {
  if (s.length() > 1) {
    return null;
  }

  let result: ModlPrimitive | null = null;
  const tok = s.next() as Token;
  switch (tok.type) {
    case TokenType.LPAREN:
    case TokenType.RPAREN:
    case TokenType.LBRACKET:
    case TokenType.RBRACKET:
    case TokenType.STRUCT_SEP:
    case TokenType.EQUALS: {
      return null;
    }
    case TokenType.NULL: {
      result = ModlBoolNull.ModlNull;
      break;
    }
    case TokenType.TRUE: {
      result = ModlBoolNull.ModlTrue;
      break;
    }
    case TokenType.FALSE: {
      result = ModlBoolNull.ModlFalse;
      break;
    }
    case TokenType.QUOTED: {
      result = new ModlQuoted(tok.value as string);
      break;
    }
    case TokenType.STRING: {
      result = new ModlString(tok.value as string);
      break;
    }
    case TokenType.INTEGER: {
      result = new ModlInteger(tok.value as number);
      break;
    }
    case TokenType.FLOAT: {
      result = new ModlFloat(tok.value as number);
      break;
    }
    default: {
      throw new ParserException(`Unknown token type in: ${JSON.stringify(tok)}`);
    }
  }
  return result;
};

const parseStructures = (s: TokenStream): ModlStructure[] => {
  const result: ModlStructure[] = [];
  while (s.length() > 0) {
    result.push(parseModlValue(s) as ModlStructure);
  }
  return result;
};

const parseModlValue = (s: TokenStream): ModlValue => {
  const firstToken = s.next() as Token;

  if (firstToken.type === TokenType.LBRACKET) {
    // Its an array
    const arrayEntries: ModlValue[] = [];
    while (s.length() > 0) {
      const ms = parseModlValue(s);
      arrayEntries.push(ms);

      const peek = s.next();
      if (peek) {
        if (peek.type === TokenType.RBRACKET) {
          break;
        }
        s.pushBack(peek);
      } else {
        throw new ParserException(`Expected ']'`);
      }
    }
    return new ModlArray(arrayEntries);
  } else if (firstToken.type === TokenType.LPAREN) {
    // Its a map
    const mapEntries: ModlPair[] = [];
    while (s.length() > 0) {
      const mp = parseModlValue(s);
      mapEntries.push(mp as ModlPair);

      const peek = s.next();
      if (peek) {
        if (peek.type === TokenType.RPAREN) {
          break;
        }
        s.pushBack(peek);
      } else {
        throw new ParserException(`Expected ')'`);
      }
    }
    return new ModlMap(mapEntries);
  } else if (firstToken.type === TokenType.STRING) {
    const key = firstToken.value as string;
    const equalsOrStructure = s.next();
    if (equalsOrStructure) {
      if (equalsOrStructure.type !== TokenType.EQUALS) {
        s.pushBack(equalsOrStructure);
      }
      return new ModlPair(key, parseModlValue(s));
    } else {
      return new ModlString(firstToken.value as string);
    }
  } else if (firstToken.type === TokenType.QUOTED) {
    return new ModlQuoted(firstToken.value as string);
  } else if (firstToken.type === TokenType.INTEGER) {
    return new ModlInteger(firstToken.value as number);
  } else if (firstToken.type === TokenType.FLOAT) {
    return new ModlFloat(firstToken.value as number);
  } else if (firstToken.type === TokenType.NULL) {
    return ModlBoolNull.ModlNull;
  } else if (firstToken.type === TokenType.TRUE) {
    return ModlBoolNull.ModlTrue;
  } else if (firstToken.type === TokenType.FALSE) {
    return ModlBoolNull.ModlFalse;
  } else {
    s.pushBack(firstToken);
    const maybePrimitive = parsePrimitive(s);
    if (maybePrimitive) {
      return maybePrimitive;
    }
  }

  throw new ParserException(`Unexpected token: '${JSON.stringify(firstToken.value)}'`);
};

class ParserException extends Error { }
