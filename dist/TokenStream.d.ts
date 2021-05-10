import { Token } from './MODLTokeniser';
export declare class TokenStream {
    private readonly tokens;
    constructor(tokens: Token[]);
    next(): Token | undefined;
    pushBack(t: Token): void;
    length(): number;
}
