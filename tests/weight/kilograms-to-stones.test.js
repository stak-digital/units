import kilogramsToStones from '../../src/weight/kilograms-to-stones';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilogramsToStones
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilogramsToStones(1)
	).toBe(0.157473);

});
