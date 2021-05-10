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
exports.parser = void 0;
var Model_1 = require("./Model");
var MODLTokeniser_1 = require("./MODLTokeniser");
var TokenStream_1 = require("./TokenStream");
var parser = function (s) {
    var tokens = MODLTokeniser_1.tokeniser(s);
    var root = parse(new TokenStream_1.TokenStream(tokens));
    return new Model_1.Modl(root);
};
exports.parser = parser;
var parse = function (s) {
    var rootPrimitive = parsePrimitive(s);
    if (rootPrimitive !== null) {
        return rootPrimitive;
    }
    return parseStructures(s);
};
var parsePrimitive = function (s) {
    if (s.length() > 1) {
        return null;
    }
    var result = null;
    var tok = s.next();
    switch (tok.type) {
        case MODLTokeniser_1.TokenType.LPAREN:
        case MODLTokeniser_1.TokenType.RPAREN:
        case MODLTokeniser_1.TokenType.LBRACKET:
        case MODLTokeniser_1.TokenType.RBRACKET:
        case MODLTokeniser_1.TokenType.STRUCT_SEP:
        case MODLTokeniser_1.TokenType.EQUALS: {
            return null;
        }
        case MODLTokeniser_1.TokenType.NULL: {
            result = Model_1.ModlBoolNull.ModlNull;
            break;
        }
        case MODLTokeniser_1.TokenType.TRUE: {
            result = Model_1.ModlBoolNull.ModlTrue;
            break;
        }
        case MODLTokeniser_1.TokenType.FALSE: {
            result = Model_1.ModlBoolNull.ModlFalse;
            break;
        }
        case MODLTokeniser_1.TokenType.QUOTED: {
            result = new Model_1.ModlQuoted(tok.value);
            break;
        }
        case MODLTokeniser_1.TokenType.STRING: {
            result = new Model_1.ModlString(tok.value);
            break;
        }
        case MODLTokeniser_1.TokenType.INTEGER: {
            result = new Model_1.ModlInteger(tok.value);
            break;
        }
        case MODLTokeniser_1.TokenType.FLOAT: {
            result = new Model_1.ModlFloat(tok.value);
            break;
        }
        default: {
            throw new ParserException("Unknown token type in: " + JSON.stringify(tok));
        }
    }
    return result;
};
var parseStructures = function (s) {
    var result = [];
    while (s.length() > 0) {
        result.push(parseModlValue(s));
    }
    return result;
};
var parseModlValue = function (s) {
    var firstToken = s.next();
    if (firstToken.type === MODLTokeniser_1.TokenType.LBRACKET) {
        var arrayEntries = [];
        while (s.length() > 0) {
            var ms = parseModlValue(s);
            arrayEntries.push(ms);
            var peek = s.next();
            if (peek) {
                if (peek.type === MODLTokeniser_1.TokenType.RBRACKET) {
                    break;
                }
                s.pushBack(peek);
            }
            else {
                throw new ParserException("Expected ']'");
            }
        }
        return new Model_1.ModlArray(arrayEntries);
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.LPAREN) {
        var mapEntries = [];
        while (s.length() > 0) {
            var mp = parseModlValue(s);
            mapEntries.push(mp);
            var peek = s.next();
            if (peek) {
                if (peek.type === MODLTokeniser_1.TokenType.RPAREN) {
                    break;
                }
                s.pushBack(peek);
            }
            else {
                throw new ParserException("Expected ')'");
            }
        }
        return new Model_1.ModlMap(mapEntries);
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.STRING) {
        var key = firstToken.value;
        var equalsOrStructure = s.next();
        if (equalsOrStructure) {
            if (equalsOrStructure.type !== MODLTokeniser_1.TokenType.EQUALS) {
                s.pushBack(equalsOrStructure);
            }
            return new Model_1.ModlPair(key, parseModlValue(s));
        }
        else {
            return new Model_1.ModlString(firstToken.value);
        }
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.QUOTED) {
        return new Model_1.ModlQuoted(firstToken.value);
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.INTEGER) {
        return new Model_1.ModlInteger(firstToken.value);
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.FLOAT) {
        return new Model_1.ModlFloat(firstToken.value);
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.NULL) {
        return Model_1.ModlBoolNull.ModlNull;
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.TRUE) {
        return Model_1.ModlBoolNull.ModlTrue;
    }
    else if (firstToken.type === MODLTokeniser_1.TokenType.FALSE) {
        return Model_1.ModlBoolNull.ModlFalse;
    }
    else {
        s.pushBack(firstToken);
        var maybePrimitive = parsePrimitive(s);
        if (maybePrimitive) {
            return maybePrimitive;
        }
    }
    throw new ParserException("Unexpected token: '" + JSON.stringify(firstToken.value) + "'");
};
var ParserException = (function (_super) {
    __extends(ParserException, _super);
    function ParserException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParserException;
}(Error));
//# sourceMappingURL=MODLParser.js.map