import tonnesToPounds from '../../src/weight/tonnes-to-pounds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		tonnesToPounds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		tonnesToPounds(1)
	).toBe(2204.6215);

});
