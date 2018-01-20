import poundForceToDyne from '../../src/force/pound-force-to-dyne';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundForceToDyne
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundForceToDyne(1)
	).toBe(444822.16);

});
