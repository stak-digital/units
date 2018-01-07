import stonesToTonnes from '../../src/weight/stones-to-tonnes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		stonesToTonnes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		stonesToTonnes(1)
	).toBe(0.00635029);

});
