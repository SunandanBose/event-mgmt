const { sum } = require('./code.js');

test('sum of 1 and 2 is 3', () => {
	expect(sum(1,2)).toBe(3);
})

test('toEqual instead of tobe should be used for comparing arrays', () => {
	expect([1,2,3,4]).toEqual([1,2,3,4]);
})

test('toEqual instead of tobe should be used for comparing objects', () => {
	expect({a:1}).toEqual({a:1});
})

test('falsiness tests', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('to compare numbers use these', () => {
	expect(5).toBeGreaterThan(4);
	expect(2).toBeLessThan(4);
	expect(5).toBeGreaterThanOrEqual(4);

	// They are same
	expect(5).toBe(5);
	expect(5).toEqual(5);
})

test('to compare floats use closeTo', () => {
	expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
})

test('to compare strings and regex we use these', () => {
	expect('raj').toBe('raj');
	expect('raj').toMatch(/^ra/);
	expect('raj').not.toMatch(/^a/);
})


test('to say not equal use not', () => {
	expect(5).not.toBe(4);
})

test('to check if array has a value use contains', () => {
	expect([1,2,3,4]).toContain(4);
	expect([1,2,3,4]).not.toContain(5);
})

// You don't need to call the function
test('to test exceptions use toThrow', () => {
	expect((() => { throw new Error('Exception') })).toThrow();
})