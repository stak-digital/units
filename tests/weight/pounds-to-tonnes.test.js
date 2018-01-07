import poundsToTonnes from '../../src/weight/pounds-to-tonnes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundsToTonnes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundsToTonnes(1)
	).toBe(0.00045359237);

});
