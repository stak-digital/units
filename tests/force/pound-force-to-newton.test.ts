import poundForceToNewton from '../../src/force/pound-force-to-newton';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundForceToNewton
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundForceToNewton(1)
	).toBe(4.4482216);

});
