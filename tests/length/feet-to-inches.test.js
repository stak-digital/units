import feetToInches from '../../src/length/feet-to-inches';
import expect from 'expect';

test('it should exist', () => {

	expect(
		feetToInches
	).toExist();

});

test('it should return the correct values', () => {

	const oneFootToInches = 12;

	expect(
		feetToInches(1)
	).toBe(oneFootToInches);

	expect(
		feetToInches(2)
	).toBe(oneFootToInches * 2);

	expect(
		feetToInches(5)
	).toBe(oneFootToInches * 5);

	expect(
		feetToInches(10)
	).toBe(oneFootToInches * 10);

});