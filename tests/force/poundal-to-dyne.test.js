import poundalToDyne from '../../src/force/poundal-to-dyne';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundalToDyne
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundalToDyne(1)
	).toBe(13825.495);

});
