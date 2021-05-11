import { expect } from 'chai';
import { ModlBoolNull, ModlFloat, ModlInteger, ModlPair, ModlQuoted, ModlString, ModlStructure } from '../src/Model';
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

  it('Can parse a MODL Pair at the root', () => {
    const modl = parser('a=b');
    const structures = modl.s as ModlStructure[];
    expect(structures.length).to.equal(1);
    const pair = structures[0] as ModlPair;
    expect(pair.key).to.equal('a');
    const value = pair.value as ModlString;
    expect(value.value).to.equal('b');
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
});
