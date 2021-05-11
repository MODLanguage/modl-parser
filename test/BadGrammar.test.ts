import { expect } from 'chai';
import { parseModl } from '../src/MODLParser';

const bad = [
  ';',
  '[',
  ']',
  '(',
  ')',
  '=',
  '[[]',
  '[]]',
  '(()',
  '())',
  '[;]',
  '(;)',
  '()()',
  '[][]',
  '(a=b;)',
  '[a=b;]',
  '[];;',
  '();;',
  'a;b',
];
describe('MODLParser bad grammar', () => {
  it('Can report bad grammar', () => {
    const modls = bad.map((s) => {
      try {
        const result = parseModl(s);
        console.error(`Unexpected success for : ${s}`);
        return result;
      } catch (e) {
        console.error(e.message);
      }
      return null;
    });
    const nonNullResults = modls.filter((v) => v !== null);
    if (nonNullResults.length > 0) {
      console.log(JSON.stringify(nonNullResults));
    }
    expect(nonNullResults.length).to.equal(0);
  });
});
