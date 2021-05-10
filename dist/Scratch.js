"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MODLTokeniser_1 = require("./MODLTokeniser");
var tokens = MODLTokeniser_1.tokeniser('x="The string \\"hello\\" is quoted"');
console.log(JSON.stringify(tokens));
//# sourceMappingURL=Scratch.js.map