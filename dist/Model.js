"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModlBoolNull = exports.ModlString = exports.ModlQuoted = exports.ModlFloat = exports.ModlInteger = exports.ModlPair = exports.ModlArray = exports.ModlMap = exports.Modl = void 0;
var Modl = (function () {
    function Modl(s) {
        this.s = s;
    }
    return Modl;
}());
exports.Modl = Modl;
var ModlMap = (function () {
    function ModlMap(items) {
        this.items = items;
    }
    return ModlMap;
}());
exports.ModlMap = ModlMap;
var ModlArray = (function () {
    function ModlArray(items) {
        this.items = items;
    }
    return ModlArray;
}());
exports.ModlArray = ModlArray;
var ModlPair = (function () {
    function ModlPair(key, value) {
        this.key = key;
        this.value = value;
    }
    return ModlPair;
}());
exports.ModlPair = ModlPair;
var ModlInteger = (function () {
    function ModlInteger(value) {
        this.value = value;
    }
    return ModlInteger;
}());
exports.ModlInteger = ModlInteger;
var ModlFloat = (function () {
    function ModlFloat(value) {
        this.value = value;
    }
    return ModlFloat;
}());
exports.ModlFloat = ModlFloat;
var ModlQuoted = (function () {
    function ModlQuoted(value) {
        this.value = value;
    }
    return ModlQuoted;
}());
exports.ModlQuoted = ModlQuoted;
var ModlString = (function () {
    function ModlString(value) {
        this.value = value;
    }
    return ModlString;
}());
exports.ModlString = ModlString;
var ModlBoolNull;
(function (ModlBoolNull) {
    ModlBoolNull[ModlBoolNull["ModlTrue"] = 0] = "ModlTrue";
    ModlBoolNull[ModlBoolNull["ModlFalse"] = 1] = "ModlFalse";
    ModlBoolNull[ModlBoolNull["ModlNull"] = 2] = "ModlNull";
})(ModlBoolNull = exports.ModlBoolNull || (exports.ModlBoolNull = {}));
//# sourceMappingURL=Model.js.map