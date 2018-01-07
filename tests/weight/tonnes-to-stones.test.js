import tonnesToStones from '../../src/weight/tonnes-to-stones';
import expect from 'expect';

test('it should exist', () => {

	expect(
		tonnesToStones
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		tonnesToStones(1)
	).toBe(157.47297);

});
