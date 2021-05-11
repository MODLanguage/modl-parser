import { Token } from './MODLTokeniser';

export class TokenStream {
  constructor(private readonly tokens: Token[]) {}

  next(): Token | undefined {
    let result: Token | undefined = undefined;
    if (this.tokens.length > 0) {
      result = this.tokens.shift();
    }
    return result;
  }

  peek(): Token | undefined {
    let result: Token | undefined = undefined;
    if (this.tokens.length > 0) {
      result = this.tokens[0];
    }
    return result;
  }

  pushBack(t: Token): void {
    this.tokens.unshift(t);
  }

  length(): number {
    return this.tokens.length;
  }
}
