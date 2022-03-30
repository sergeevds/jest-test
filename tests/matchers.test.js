import { compileAndroidCode, sum } from '../utils';

test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4)
});

test('truthiness', () => {
    expect(undefined).toBeUndefined()
    expect(undefined).not.toBeDefined()
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    expect(value).not.toBe(0.3)
    expect(value).toBeCloseTo(0.3)
});

   
test('throwing an error goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});
