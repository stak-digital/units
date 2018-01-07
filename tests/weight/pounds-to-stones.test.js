import poundsToStones from '../../src/weight/pounds-to-stones';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundsToStones
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundsToStones(1)
	).toBe(0.07142857142857142);

});
