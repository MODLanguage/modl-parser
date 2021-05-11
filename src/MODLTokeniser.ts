export class Token {
  constructor(
    readonly type: TokenType,
    readonly value: string | number | boolean | null,
    readonly from: number,
    readonly to: number
  ) {}
  toS(): string {
    return `type: ${this.type.toString()}, from: ${this.from}, to: ${this.to}, value: "${this.value}"`;
  }
}

export const tokeniser = (s: string): Token[] => {
  return new Context(s).parse();
};

const WS = ' \t\r\n';
const nonStringTokens = '[]();"=';
const INTEGER_REGEX = new RegExp(/^-?\d+$/);
const FLOAT_REGEX = new RegExp(/^[-+]?([0-9]*[.])?[0-9]+([eE][-+]?\d+)?$/);

export enum TokenType {
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  LBRACKET = 'LBRACKET',
  RBRACKET = 'RBRACKET',
  STRUCT_SEP = 'STRUCT_SEP',
  NULL = 'NULL',
  TRUE = 'TRUE',
  FALSE = 'FALSE',
  EQUALS = 'EQUALS',
  QUOTED = 'QUOTED',
  STRING = 'STRING',
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
}

class Context {
  private tokStart = 0;
  private tokEnd = 0;
  public tokens = new Array<Token>();

  constructor(readonly s: string) {}

  parse(): Token[] {
    while (this.next()) {
      // process the next token
    }
    return this.tokens;
  }

  next(): boolean {
    let ws = this.s.charAt(this.tokStart);
    while (ws != '' && WS.includes(ws)) {
      this.tokStart++;
      ws = this.s.charAt(this.tokStart);
    }
    if (this.tokStart >= this.s.length) {
      return false;
    }
    let tokType;

    switch (this.s.charAt(this.tokStart)) {
      case '(': {
        tokType = TokenType.LPAREN;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case ')': {
        tokType = TokenType.RPAREN;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case '[': {
        tokType = TokenType.LBRACKET;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case ']': {
        tokType = TokenType.RBRACKET;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case ';': {
        tokType = TokenType.STRUCT_SEP;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case '=': {
        tokType = TokenType.EQUALS;
        this.tokEnd = this.tokStart + 1;
        break;
      }
      case '`':
      case '"': {
        tokType = TokenType.QUOTED;
        this.tokEnd = this.scanToEndOfQuoted(this.s, this.tokStart, this.s.charAt(this.tokStart));
        break;
      }
      default:
        tokType = TokenType.STRING;
        this.tokEnd = this.scanToEndOfString(this.s, this.tokStart);
        break;
    }

    const tokValue = this.s.substring(this.tokStart, this.tokEnd).trim();
    if (tokValue.match(INTEGER_REGEX)) {
      const number = parseInt(tokValue);
      this.tokens.push(new Token(TokenType.INTEGER, number, this.tokStart, this.tokEnd));
    } else if (tokValue.match(FLOAT_REGEX)) {
      const number = parseFloat(tokValue);
      this.tokens.push(new Token(TokenType.FLOAT, number, this.tokStart, this.tokEnd));
    } else if (tokValue === 'null') {
      this.tokens.push(new Token(TokenType.NULL, null, this.tokStart, this.tokEnd));
    } else if (tokValue === 'true') {
      this.tokens.push(new Token(TokenType.TRUE, true, this.tokStart, this.tokEnd));
    } else if (tokValue === 'false') {
      this.tokens.push(new Token(TokenType.FALSE, false, this.tokStart, this.tokEnd));
    } else {
      this.tokens.push(new Token(tokType, tokValue, this.tokStart, this.tokEnd));
    }
    this.tokStart = this.tokEnd;
    return this.tokEnd < this.s.length;
  }

  scanToEndOfQuoted(s: string, start: number, quoteChar: string): number {
    let end = start + 1;

    while (end < s.length) {
      const endChar = s.charAt(end);
      const prevChar = s.charAt(end - 1);

      // Is it an end quote without an escape char?
      if (endChar === quoteChar) {
        if (prevChar !== '\\' && prevChar !== '~') {
          break;
        }
      }
      end++;
    }
    if (s.charAt(end) !== quoteChar) {
      throw new TokeniserException(`Unclosed quote: ${quoteChar} in ${this.s} near ${start}:${end}`);
    }
    return end + 1;
  }

  scanToEndOfString(s: string, start: number): number {
    let end = start + 1;
    while (end < s.length && !nonStringTokens.includes(s.charAt(end))) {
      end++;
    }
    return end;
  }
}

export class TokeniserException extends Error {}
