export declare class MODLLexer {
  constructor(stream: InputStream);
}

import { CommonTokenStream, InputStream, Parser } from 'antlr4';
import { ErrorListener } from 'antlr4/error';
export { ErrorListener } from 'antlr4/error';

export declare class MODLParser extends Parser {
  constructor(stream: CommonTokenStream);
  addErrorListener(listener: ErrorListener): void;
  modl(): ModlContext;
}

export declare class ModlContext { }
