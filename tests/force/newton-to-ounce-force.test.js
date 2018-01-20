import newtonToOunceForce from '../../src/force/newton-to-ounce-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		newtonToOunceForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		newtonToOunceForce(1)
	).toBe(3.5969431019354);

});
