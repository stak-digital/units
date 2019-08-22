import kilopondToPoundal from '../../src/force/kilopond-to-poundal';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilopondToPoundal
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilopondToPoundal(1)
	).toBe(70.93163752907361);

});
