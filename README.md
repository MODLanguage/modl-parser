# modl-parser

This package parses [MODL](https://www.modl.uk/) strings to an intermediate structure suitable for the [MODL Interpreter](https://github.com/MODLanguage/typescript-modl-interpreter) and is unlikely to be of much use on its own.

A simple TypeScript usage example follows.
```TypeScript
import { parseModl } from './MODLParser';

const result = parseModl('x=y');

console.log(JSON.stringify(result));
```
