import poundForceToOunceForce from '../../src/force/pound-force-to-ounce-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundForceToOunceForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundForceToOunceForce(1)
	).toBe(16);

});
