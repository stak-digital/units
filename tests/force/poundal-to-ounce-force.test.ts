import poundalToOunceForce from '../../src/force/poundal-to-ounce-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundalToOunceForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundalToOunceForce(1)
	).toBe(0.4972951887109312);

});
