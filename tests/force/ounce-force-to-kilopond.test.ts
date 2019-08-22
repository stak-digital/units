import ounceForceToKilopond from '../../src/force/ounce-force-to-kilopond';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ounceForceToKilopond
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ounceForceToKilopond(1)
	).toBe(0.028349523027741);

});
