import poundalToKilopond from '../../src/force/poundal-to-kilopond';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundalToKilopond
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundalToKilopond(1)
	).toBe(0.014098081403945);

});
