import poundForceToKilopond from '../../src/force/pound-force-to-kilopond';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundForceToKilopond
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundForceToKilopond(1)
	).toBe(0.45359236844386);

});
