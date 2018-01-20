import ounceForceToDyne from '../../src/force/ounce-force-to-dyne';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ounceForceToDyne
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ounceForceToDyne(1)
	).toBe(27801.385);

});
