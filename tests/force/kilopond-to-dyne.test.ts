import kilopondToDyne from '../../src/force/kilopond-to-dyne';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilopondToDyne
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilopondToDyne(1)
	).toBe(980665.0000000271);

});
