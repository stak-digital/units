import feetToMeters from '../../src/length/feet-to-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		feetToMeters
	).toExist();

});

test('it should return the correct values', () => {

	const oneFootToMeters = 0.3048;

	expect(
		feetToMeters(1)
	).toBe(oneFootToMeters);

	expect(
		feetToMeters(2)
	).toBe(oneFootToMeters * 2);

	expect(
		feetToMeters(5)
	).toBe(oneFootToMeters * 5);

	expect(
		feetToMeters(10)
	).toBe(oneFootToMeters * 10);

});