import { sumArr, sum } from '../src/index';
describe('lerna-pkg-1', () => {
    it('sumArr should works', () => {
        expect(sumArr(1, 2, 3, 4)).toBe(10);
    });

    it('sum(1,2) should works', () => {
        expect(sum(1, 2)).toBe('Sum(1, 2) = 3');
    });
});
