import kilopondToOunceForce from '../../src/force/kilopond-to-ounce-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilopondToOunceForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilopondToOunceForce(1)
	).toBe(35.27396207059516);

});
