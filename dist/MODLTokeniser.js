"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = exports.tokeniser = exports.Token = void 0;
var Token = (function () {
    function Token(type, value) {
        this.type = type;
        this.value = value;
    }
    return Token;
}());
exports.Token = Token;
var tokeniser = function (s) {
    return new Context(s).parse();
};
exports.tokeniser = tokeniser;
var WS = ' \t\r\n';
var nonStringTokens = '[]();"`=';
var INTEGER_REGEX = new RegExp(/^-?\d+$/);
var FLOAT_REGEX = new RegExp(/^[-+]?([0-9]*[.])?[0-9]+([eE][-+]?\d+)?$/);
var TokenType;
(function (TokenType) {
    TokenType[TokenType["LPAREN"] = 0] = "LPAREN";
    TokenType[TokenType["RPAREN"] = 1] = "RPAREN";
    TokenType[TokenType["LBRACKET"] = 2] = "LBRACKET";
    TokenType[TokenType["RBRACKET"] = 3] = "RBRACKET";
    TokenType[TokenType["STRUCT_SEP"] = 4] = "STRUCT_SEP";
    TokenType[TokenType["NULL"] = 5] = "NULL";
    TokenType[TokenType["TRUE"] = 6] = "TRUE";
    TokenType[TokenType["FALSE"] = 7] = "FALSE";
    TokenType[TokenType["EQUALS"] = 8] = "EQUALS";
    TokenType[TokenType["QUOTED"] = 9] = "QUOTED";
    TokenType[TokenType["STRING"] = 10] = "STRING";
    TokenType[TokenType["INTEGER"] = 11] = "INTEGER";
    TokenType[TokenType["FLOAT"] = 12] = "FLOAT";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var Context = (function () {
    function Context(s) {
        this.s = s;
        this.tokStart = 0;
        this.tokEnd = 0;
        this.tokens = new Array();
    }
    Context.prototype.parse = function () {
        while (this.next()) {
        }
        return this.tokens;
    };
    Context.prototype.next = function () {
        while (WS.includes(this.s.charAt(this.tokStart))) {
            this.tokStart++;
        }
        var tokType;
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
        var tokValue = this.s.substring(this.tokStart, this.tokEnd).trim();
        if (tokValue.match(INTEGER_REGEX)) {
            var number = parseInt(tokValue);
            this.tokens.push(new Token(TokenType.INTEGER, number));
        }
        else if (tokValue.match(FLOAT_REGEX)) {
            var number = parseFloat(tokValue);
            this.tokens.push(new Token(TokenType.FLOAT, number));
        }
        else if (tokValue === 'null') {
            this.tokens.push(new Token(TokenType.NULL, null));
        }
        else if (tokValue === 'true') {
            this.tokens.push(new Token(TokenType.TRUE, true));
        }
        else if (tokValue === 'false') {
            this.tokens.push(new Token(TokenType.FALSE, false));
        }
        else {
            this.tokens.push(new Token(tokType, tokValue));
        }
        this.tokStart = this.tokEnd;
        return this.tokEnd < this.s.length;
    };
    Context.prototype.scanToEndOfQuoted = function (s, start, quoteChar) {
        var end = start + 1;
        while (end < s.length) {
            var endChar = s.charAt(end);
            var prevChar = s.charAt(end - 1);
            if (endChar === quoteChar) {
                if (prevChar !== '\\' && prevChar !== '~') {
                    break;
                }
            }
            end++;
        }
        if (s.charAt(end) !== quoteChar) {
            throw new TokeniserException("Unclosed quote: " + quoteChar + " in " + this.s);
        }
        return end + 1;
    };
    Context.prototype.scanToEndOfString = function (s, start) {
        var end = start + 1;
        while (end < s.length && !nonStringTokens.includes(s.charAt(end))) {
            end++;
        }
        return end;
    };
    return Context;
}());
var TokeniserException = (function (_super) {
    __extends(TokeniserException, _super);
    function TokeniserException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TokeniserException;
}(Error));
//# sourceMappingURL=MODLTokeniser.js.map