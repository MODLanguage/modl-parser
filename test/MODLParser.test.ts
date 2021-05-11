import { expect } from 'chai';
import {
  ModlArray,
  ModlBoolNull,
  ModlFloat,
  ModlInteger,
  ModlMap,
  ModlPair,
  ModlQuoted,
  ModlString,
  ModlStructure,
} from '../src/Model';
import { parser } from '../src/MODLParser';

describe('MODLParser', () => {
  it('Can parse a string primitive at the root', () => {
    const modl = parser('hello');
    const value = modl.s as ModlString;
    expect(value.value).to.equal('hello');
  });

  it('Can parse a float primitive at the root', () => {
    const modl = parser('2.54');
    const value = modl.s as ModlFloat;
    expect(value.value).to.equal(2.54);
  });

  it('Can parse an integer primitive at the root', () => {
    const modl = parser('99');
    const value = modl.s as ModlInteger;
    expect(value.value).to.equal(99);
  });

  it('Can parse a quoted primitive at the root', () => {
    const modl = parser('`hello`');
    const value = modl.s as ModlQuoted;
    expect(value.value).to.equal('`hello`');
  });

  it('Can parse a null primitive at the root', () => {
    const modl = parser('null');
    const value = modl.s as ModlBoolNull;
    expect(value).to.equal(ModlBoolNull.ModlNull);
  });

  it('Can parse a true primitive at the root', () => {
    const modl = parser('true');
    const value = modl.s as ModlBoolNull;
    expect(value).to.equal(ModlBoolNull.ModlTrue);
  });

  it('Can parse a false primitive at the root', () => {
    const modl = parser('false');
    const value = modl.s as ModlBoolNull;
    expect(value).to.equal(ModlBoolNull.ModlFalse);
  });

  it('Can parse an empty map', () => {
    const modl = parser('()');
    const value = modl.s as ModlStructure[];
    expect(value.length).to.equal(1);
    const map = value[0] as ModlMap;
    expect(map.items.length).to.equal(0);
  });

  it('Can parse an empty array', () => {
    const modl = parser('[]');
    const value = modl.s as ModlStructure[];
    expect(value.length).to.equal(1);
    const array = value[0] as ModlArray;
    expect(array.items.length).to.equal(0);
  });

  it('Can parse an empty map with ending semicolon', () => {
    const modl = parser('();');
    const value = modl.s as ModlStructure[];
    expect(value.length).to.equal(1);
    const map = value[0] as ModlMap;
    expect(map.items.length).to.equal(0);
  });

  it('Can parse an empty array with ending semicolon', () => {
    const modl = parser('[];');
    const value = modl.s as ModlStructure[];
    expect(value.length).to.equal(1);
    const array = value[0] as ModlArray;
    expect(array.items.length).to.equal(0);
  });

  it('Can parse a MODL Pair at the root', () => {
    const modl = parser('a=b');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);
    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('a');
    const value = pair.value as ModlString;
    expect(value.value).to.equal('b');
  });

  it('Can parse a MODL Pair with quotes at the root - 1', () => {
    const modl = parser('"a"="b"');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);
    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('"a"');
    const value = pair.value as ModlString;
    expect(value.value).to.equal('"b"');
  });

  it('Can parse a MODL Pair with quotes at the root - 2', () => {
    const modl = parser('`a`=`b`');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);
    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('`a`');
    const value = pair.value as ModlString;
    expect(value.value).to.equal('`b`');
  });

  it('Can parse a MODL Pair with quotes and embedded MODL tokens', () => {
    const modl = parser('"a=[];()b"="c=[];()d"');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);
    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('"a=[];()b"');
    const value = pair.value as ModlString;
    expect(value.value).to.equal('"c=[];()d"');
  });

  it('Can parse a list of MODL Pairs at the root', () => {
    const modl = parser('a=b;c=d;e=f');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(3);
    const p1 = structures[0] as ModlPair;
    const p2 = structures[1] as ModlPair;
    const p3 = structures[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a MODL Map at the root', () => {
    const modl = parser('(a=b;c=d;e=f)');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const map = structures[0] as ModlMap;
    const mapEntries = map.items;
    expect(mapEntries.length).to.equal(3);

    const p1 = mapEntries[0] as ModlPair;
    const p2 = mapEntries[1] as ModlPair;
    const p3 = mapEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a MODL Array at the root', () => {
    const modl = parser('[a=b;c=d;e=f]');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const array = structures[0] as ModlArray;
    const arrayEntries = array.items;
    expect(arrayEntries.length).to.equal(3);

    const p1 = arrayEntries[0] as ModlPair;
    const p2 = arrayEntries[1] as ModlPair;
    const p3 = arrayEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a Pair with a Map at the root using =', () => {
    const modl = parser('x=(a=b;c=d;e=f)');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('x');

    const map = pair.value as ModlMap;
    const mapEntries = map.items;
    expect(mapEntries.length).to.equal(3);

    const p1 = mapEntries[0] as ModlPair;
    const p2 = mapEntries[1] as ModlPair;
    const p3 = mapEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a Pair with a Map at the root not using =', () => {
    const modl = parser('x(a=b;c=d;e=f)');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('x');

    const map = pair.value as ModlMap;
    const mapEntries = map.items;
    expect(mapEntries.length).to.equal(3);

    const p1 = mapEntries[0] as ModlPair;
    const p2 = mapEntries[1] as ModlPair;
    const p3 = mapEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a MODL Array at the root using =', () => {
    const modl = parser('x=[a=b;c=d;e=f]');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('x');

    const array = pair.value as ModlArray;
    const arrayEntries = array.items;
    expect(arrayEntries.length).to.equal(3);

    const p1 = arrayEntries[0] as ModlPair;
    const p2 = arrayEntries[1] as ModlPair;
    const p3 = arrayEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });

  it('Can parse a MODL Array at the root not using =', () => {
    const modl = parser('x[a=b;c=d;e=f]');

    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);

    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('x');

    const array = pair.value as ModlArray;
    const arrayEntries = array.items;
    expect(arrayEntries.length).to.equal(3);

    const p1 = arrayEntries[0] as ModlPair;
    const p2 = arrayEntries[1] as ModlPair;
    const p3 = arrayEntries[2] as ModlPair;
    const v1 = p1.value as ModlString;
    const v2 = p2.value as ModlString;
    const v3 = p3.value as ModlString;
    expect(p1.key).to.equal('a');
    expect(p2.key).to.equal('c');
    expect(p3.key).to.equal('e');
    expect(v1.value).to.equal('b');
    expect(v2.value).to.equal('d');
    expect(v3.value).to.equal('f');
  });
});
