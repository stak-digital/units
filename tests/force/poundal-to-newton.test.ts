import poundalToNewton from '../../src/force/poundal-to-newton';
import expect from 'expect';

test('it should exist', () => {

	expect(
		poundalToNewton
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		poundalToNewton(1)
	).toBe(0.13825495);

});
