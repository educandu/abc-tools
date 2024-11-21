import { describe, expect, it } from 'vitest';
import { xml2abc, transposeAbc } from './index.js';

const song1 = `
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|
eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|
`.trim();

const song1Transposed = `
X: 1
T: Cooley's
M: 4/4
L: 1/8
K:F#minor
|:E2|Fc{d}cB c2 Fc|~c2 Bc ecBA|GEBE cEBE|GEBE eBGE|
FccB c2 Fc|c2 Bc efga|bgf^d ecBG|EFGE F2:|
|:ag|fc c2 fgaf|fc c2 afec|B2 GB EBGB|B2 GB efga|
fc c2 fcac|fc c2 efga|bgf^d ecBG|EFGE F2:|
`.trim();

describe('index', () => {
  describe('xml2abc', () => {
    it('should be a function', () => {
      expect(xml2abc).toBeTypeOf('function');
    });
  });
  describe('transposeAbc', () => {
    it('should transpose ABC code correctly', () => {
      expect(transposeAbc(song1, 2)).toBe(song1Transposed);
    });
  });
});
