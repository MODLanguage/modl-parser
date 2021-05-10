export declare class Modl {
    readonly s: ModlStructure[] | ModlPrimitive;
    constructor(s: ModlStructure[] | ModlPrimitive);
}
export declare type ModlStructure = ModlMap | ModlArray | ModlPair;
export declare class ModlMap {
    readonly items: ModlMapItem[];
    constructor(items: ModlMapItem[]);
}
export declare class ModlArray {
    readonly items: ModlValue[];
    constructor(items: ModlValue[]);
}
export declare class ModlPair {
    readonly key: string | ModlQuoted;
    readonly value: ModlValue | ModlMap | ModlArray;
    constructor(key: string | ModlQuoted, value: ModlValue | ModlMap | ModlArray);
}
export declare type ModlMapItem = ModlPair;
export declare type ModlValue = ModlMap | ModlPair | ModlArray | ModlPrimitive;
export declare type ModlPrimitive = ModlQuoted | ModlInteger | ModlFloat | ModlString | ModlBoolNull;
export declare class ModlInteger {
    readonly value: number;
    constructor(value: number);
}
export declare class ModlFloat {
    readonly value: number;
    constructor(value: number);
}
export declare class ModlQuoted {
    readonly value: string;
    constructor(value: string);
}
export declare class ModlString {
    readonly value: string;
    constructor(value: string);
}
export declare enum ModlBoolNull {
    ModlTrue = 0,
    ModlFalse = 1,
    ModlNull = 2
}
