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
  ModlValue,
} from './Model';
import { Token, tokeniser, TokenType } from './MODLTokeniser';
import { TokenStream } from './TokenStream';

//------------------------------------------------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------------------------------------------------

/**
 * Parse a MODL string into a MODL object.
 *
 * @param s a MODL string
 * @returns a Modl object
 */
export const parseModl = (s: string): Modl => {
  const tokens = tokeniser(s);

  const rootItems: ModlStructure[] | ModlPrimitive = parse(new TokenStream(tokens));

  return new Modl(rootItems);
};

/**
 * Parsing errors
 */
export class ParserException extends Error {}

//------------------------------------------------------------------------------------------------------------------------
// Internals
//------------------------------------------------------------------------------------------------------------------------

/**
 * Parse a MODL TokenStream to a ModlStructure array or a ModlPrimitive
 *
 * @param s a TokenStream
 * @returns a ModlStructure array or a ModlPrimitive
 */
const parse = (s: TokenStream): ModlStructure[] | ModlPrimitive => {
  const rootPrimitive: ModlPrimitive | null = parsePrimitive(s);
  if (rootPrimitive !== null) {
    return rootPrimitive;
  }
  return parseStructures(s);
};

/**
 * Try to parse a ModlPrimitive from a TokenStream.
 *
 * @param s a TokenStream
 * @returns a ModlPrimitive or null
 */
const parsePrimitive = (s: TokenStream): ModlPrimitive | null => {
  let result: ModlPrimitive | null = null;
  const tok = s.next() as Token;
  switch (tok.type) {
    case TokenType.LPAREN:
    case TokenType.RPAREN:
    case TokenType.LBRACKET:
    case TokenType.RBRACKET:
    case TokenType.EQUALS: {
      if (s.empty()) {
        throw new ParserException(`Unexpected token: ${tok.toS()}`);
      }
      s.pushBack(tok);
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
    case TokenType.BRACED: {
      result = new ModlString(tok.value as string);
      break;
    }
    default: {
      throw new ParserException(`Unknown token type in: ${tok.toS()}`);
    }
  }
  if (result !== null) {
    const peek = s.peek();
    if (peek && peek.type === TokenType.STRUCT_SEP) {
      throw new ParserException(`Only one primitive is allowed at the root.`);
    }
    if (
      peek &&
      (peek.type === TokenType.LPAREN || peek.type === TokenType.LBRACKET || peek.type === TokenType.EQUALS)
    ) {
      // Its not a primitive
      s.pushBack(tok);
      return null;
    } else if (peek) {
      throw new ParserException(`Unexpected token: ${peek.toS()}`);
    }
  }
  return result;
};

/**
 * Parse an array of ModlStructure objects from a TokenStream.
 *
 * @param s a TokenStream
 * @returns a ModlStructure array
 */
const parseStructures = (s: TokenStream): ModlStructure[] => {
  const result: ModlStructure[] = [];
  while (!s.empty()) {
    result.push(parseModlValue(s) as ModlStructure);
    const maybeStructSep = s.next();
    if (maybeStructSep) {
      if (maybeStructSep.type === TokenType.STRUCT_SEP) {
        // ok
      } else {
        throw new ParserException(`Expected ';' near ${maybeStructSep.toS()}`);
      }
    }
  }
  return result;
};

/**
 *
 * @param s
 */
const parseModlMap = (s: TokenStream): ModlMap => {
  const firstToken = s.next() as Token;
  // Its a map
  const mapEntries: ModlPair[] = [];
  while (!s.empty()) {
    let peek = s.peek();
    if (peek && peek.type === TokenType.RPAREN) {
      // Consume the peeked token and break
      s.next();
      break;
    }
    const mp = parseModlValue(s);
    mapEntries.push(mp as ModlPair);

    peek = s.peek();
    if (peek) {
      if (peek.type === TokenType.RPAREN) {
        // Consume the peeked token
        s.next();
        break;
      }
      if (peek.type === TokenType.STRUCT_SEP) {
        // Consume the peeked token and continue
        s.next();
        peek = s.peek();
        if (peek && peek.type === TokenType.RPAREN) {
          throw new ParserException(`Unexpected ; before ] at ${peek}`);
        }
      }
    } else {
      throw new ParserException(`Expected ')' near ${firstToken.toS()}`);
    }
  }
  return new ModlMap(mapEntries);
};

/**
 *
 * @param s
 * @returns
 */
const parseModlArray = (s: TokenStream): ModlArray => {
  const firstToken = s.next() as Token;
  // Its an array
  const arrayEntries: ModlValue[] = [];
  while (!s.empty()) {
    let peek = s.peek();
    if (peek && peek.type === TokenType.RBRACKET) {
      // Consume the peeked token and break
      s.next();
      break;
    }
    const ms = parseModlValue(s);
    arrayEntries.push(ms);

    peek = s.peek();
    if (peek) {
      if (peek.type === TokenType.RBRACKET) {
        // Consume the peeked token and break
        s.next();
        break;
      }
      if (peek.type === TokenType.STRUCT_SEP) {
        // Consume the peeked token and continue
        s.next();
        peek = s.peek();
        if (peek && peek.type === TokenType.RBRACKET) {
          throw new ParserException(`Unexpected ; before ] at ${peek}`);
        }
      }
    } else {
      throw new ParserException(`Expected ']' near ${firstToken.toS()}`);
    }
  }
  return new ModlArray(arrayEntries);
};
/**
 * Parse ModlValues recursively from a TokenStream.
 *
 * @param s a TokenStream
 * @returns a ModlValue
 */
const parseModlValue = (s: TokenStream): ModlValue => {
  const firstToken = s.next() as Token;

  if (firstToken.type === TokenType.LBRACKET) {
    s.pushBack(firstToken);
    return parseModlArray(s);
  } else if (firstToken.type === TokenType.LPAREN) {
    s.pushBack(firstToken);
    return parseModlMap(s);
  } else if (
    firstToken.type === TokenType.STRING ||
    firstToken.type === TokenType.QUOTED ||
    firstToken.type === TokenType.BRACED
  ) {
    const peek = s.peek();

    const key = firstToken.value as string;
    if (peek && peek.type === TokenType.EQUALS) {
      // its a pair
      // Consume the = token
      s.next();
      return new ModlPair(key, parsePairValue(s));
    }

    if (peek && (peek.type === TokenType.LBRACKET || peek.type === TokenType.LPAREN)) {
      // Its still a pair
      return new ModlPair(key, parsePairValue(s));
    }

    if (
      !peek ||
      (peek &&
        (peek.type === TokenType.STRUCT_SEP || peek.type === TokenType.RPAREN || peek.type === TokenType.RBRACKET))
    ) {
      // Its simply a string or quoted string
      if (firstToken.type === TokenType.STRING || firstToken.type === TokenType.BRACED) {
        return new ModlString(firstToken.value as string);
      } else {
        return new ModlQuoted(firstToken.value as string);
      }
    }

    throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
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
  throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
};
/**
 * Parse ModlValues recursively from a TokenStream.
 *
 * @param s a TokenStream
 * @returns a ModlValue
 */
const parsePairValue = (s: TokenStream): ModlPrimitive | ModlMap | ModlArray => {
  const firstToken = s.next() as Token;

  if (firstToken.type === TokenType.LBRACKET) {
    s.pushBack(firstToken);
    return parseModlArray(s);
  } else if (firstToken.type === TokenType.LPAREN) {
    s.pushBack(firstToken);
    return parseModlMap(s);
  } else if (
    firstToken.type === TokenType.STRING ||
    firstToken.type === TokenType.QUOTED ||
    firstToken.type === TokenType.BRACED
  ) {
    const peek = s.peek();

    if (peek && peek.type === TokenType.EQUALS) {
      throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
    }

    if (peek && (peek.type === TokenType.LBRACKET || peek.type === TokenType.LPAREN)) {
      // Its still a pair
      throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
    }

    if (
      !peek ||
      (peek &&
        (peek.type === TokenType.STRUCT_SEP || peek.type === TokenType.RPAREN || peek.type === TokenType.RBRACKET))
    ) {
      // Its simply a string or quoted string
      if (firstToken.type === TokenType.STRING || firstToken.type === TokenType.BRACED) {
        return new ModlString(firstToken.value as string);
      } else {
        return new ModlQuoted(firstToken.value as string);
      }
    }

    throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
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

  throw new ParserException(`Unexpected token: '${firstToken.toS()}'`);
};
