import kilopondToNewton from '../../src/force/kilopond-to-newton';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilopondToNewton
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilopondToNewton(1)
	).toBe(9.806650000000271);

});
