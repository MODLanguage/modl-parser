import { Token } from './MODLTokeniser';

/**
 * A stream of Tokens.
 */
export class TokenStream {
  /**
   * TokenStream constructor.
   *
   * @param tokens an array of Token objects.
   */
  constructor(private readonly tokens: Token[]) {}

  /**
   * Consumes a token from the stream.
   *
   * @returns the next Token in the stream or undefined.
   */
  next(): Token | undefined {
    let result: Token | undefined = undefined;
    if (this.tokens.length > 0) {
      result = this.tokens.shift();
    }
    return result;
  }

  /**
   * Get the next token from the stream without consuming it.
   *
   * @returns the next Token in the stream or undefined.
   */
  peek(): Token | undefined {
    let result: Token | undefined = undefined;
    if (this.tokens.length > 0) {
      result = this.tokens[0];
    }
    return result;
  }

  /**
   * Return a token token to the stream.
   *
   * @param t a Token object
   */
  pushBack(t: Token): void {
    this.tokens.unshift(t);
  }

  /**
   * Check for remaining tokens in the stream.
   *
   * @returns true if there are remaining tokens in the stream.
   */
  empty(): boolean {
    return this.tokens.length === 0;
  }
}
