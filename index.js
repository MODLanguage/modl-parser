'use strict';

const lexer = require('./src/MODLLexer');
const parser = require('./src/MODLParser');

module.exports = {
  MODLLexer: lexer.MODLLexer,
  MODLParser: parser.MODLParser
};
