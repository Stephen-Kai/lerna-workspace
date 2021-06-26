import { sayHello } from '../src/index';
describe('lerna-pkg-4', () => {
    it('needs tests', () => {
        expect(sayHello("test")).toBe("test");
    });
});
