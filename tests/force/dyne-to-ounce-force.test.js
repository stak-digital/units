import dyneToOunceForce from '../../src/force/dyne-to-ounce-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		dyneToOunceForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		dyneToOunceForce(1)
	).toBe(0.000035969431019354);

});
