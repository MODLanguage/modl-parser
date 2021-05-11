/**
 * Modl
 */
export class Modl {
  constructor(readonly s: ModlStructure[] | ModlPrimitive) {}
}

/**
 * ModlStructures
 */
export type ModlStructure = ModlMap | ModlArray | ModlPair;

/**
 * ModlMap
 */
export class ModlMap {
  constructor(readonly items: ModlMapItem[]) {}
}

/**
 * Modl array
 */
export class ModlArray {
  constructor(readonly items: ModlValue[]) {}
}

/**
 * Modl pair
 */
export class ModlPair {
  constructor(readonly key: string | ModlQuoted, readonly value: ModlValue | ModlMap | ModlArray) {}
}

/**
 * ModlMapItem
 */
export type ModlMapItem = ModlPair;

/**
 * ModlValues
 */
export type ModlValue = ModlMap | ModlPair | ModlArray | ModlPrimitive;

/**
 * ModlPrimitives
 */
export type ModlPrimitive = ModlQuoted | ModlInteger | ModlFloat | ModlString | ModlBoolNull;

/**
 * Modl int
 */
export class ModlInteger {
  constructor(readonly value: number) {}
}

/**
 * Modl float
 */
export class ModlFloat {
  constructor(readonly value: number) {}
}

/**
 * Modl quoted
 */
export class ModlQuoted {
  constructor(readonly value: string) {}
}

/**
 * Modl string
 */
export class ModlString {
  constructor(readonly value: string) {}
}

/**
 * Modl bool null
 */
export enum ModlBoolNull {
  ModlTrue,
  ModlFalse,
  ModlNull,
}
