import ounceForceToNewton from '../../src/force/ounce-force-to-newton';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ounceForceToNewton
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ounceForceToNewton(1)
	).toBe(0.27801385);

});
