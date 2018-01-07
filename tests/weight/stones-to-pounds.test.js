import stonesToPounds from '../../src/weight/stones-to-pounds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		stonesToPounds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		stonesToPounds(1)
	).toBe(14);

});
