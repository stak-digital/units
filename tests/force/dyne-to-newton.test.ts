import dyneToNewton from '../../src/force/dyne-to-newton';
import expect from 'expect';

test('it should exist', () => {

	expect(
		dyneToNewton
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		dyneToNewton(1)
	).toBe(0.00001);

});
