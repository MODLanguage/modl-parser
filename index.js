const { MODLLexer } = require('./MODLLexer');
const { MODLParser } = require('./MODLParser');

module.exports = {
  Parser: MODLParser,
  Lexer: MODLLexer
};