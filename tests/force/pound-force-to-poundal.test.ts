import poundForceToPoundal from '../../src/force/pound-force-to-poundal';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundForceToPoundal
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundForceToPoundal(1)
	).toBe(32.174049464413);

});
