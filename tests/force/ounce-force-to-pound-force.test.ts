import ounceForceToPoundForce from '../../src/force/ounce-force-to-pound-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ounceForceToPoundForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ounceForceToPoundForce(1)
	).toBe(0.0625);

});
