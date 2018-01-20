import dyneToPoundForce from '../../src/force/dyne-to-pound-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		dyneToPoundForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		dyneToPoundForce(1)
	).toBe(0.0000022480894387096);

});
