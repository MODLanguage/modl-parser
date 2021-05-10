export declare class Token {
    readonly type: TokenType;
    readonly value: string | number | boolean | null;
    constructor(type: TokenType, value: string | number | boolean | null);
}
export declare const tokeniser: (s: string) => Token[];
export declare enum TokenType {
    LPAREN = 0,
    RPAREN = 1,
    LBRACKET = 2,
    RBRACKET = 3,
    STRUCT_SEP = 4,
    NULL = 5,
    TRUE = 6,
    FALSE = 7,
    EQUALS = 8,
    QUOTED = 9,
    STRING = 10,
    INTEGER = 11,
    FLOAT = 12
}
