import ounceForceToPoundal from '../../src/force/ounce-force-to-poundal';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ounceForceToPoundal
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ounceForceToPoundal(1)
	).toBe(2.0108780915258);

});
