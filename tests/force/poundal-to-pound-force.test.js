import poundalToPoundForce from '../../src/force/poundal-to-pound-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundalToPoundForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundalToPoundForce(1)
	).toBe(0.031080949294433);

});
