"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStream = void 0;
var TokenStream = (function () {
    function TokenStream(tokens) {
        this.tokens = tokens;
    }
    TokenStream.prototype.next = function () {
        var result = undefined;
        if (this.tokens.length > 0) {
            result = this.tokens.shift();
        }
        return result;
    };
    TokenStream.prototype.pushBack = function (t) {
        this.tokens.unshift(t);
    };
    TokenStream.prototype.length = function () {
        return this.tokens.length;
    };
    return TokenStream;
}());
exports.TokenStream = TokenStream;
//# sourceMappingURL=TokenStream.js.map