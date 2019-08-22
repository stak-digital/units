import millisecondsToDays from '../../src/time/milliseconds-to-days';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToDays
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToDays(1)
	).toBe(1.1574074074074076e-8);

});
