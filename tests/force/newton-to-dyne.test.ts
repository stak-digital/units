import newtonToDyne from '../../src/force/newton-to-dyne';
import expect from 'expect';

test('it should exist', () => {

	expect(
		newtonToDyne
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		newtonToDyne(1)
	).toBe(100000);

});
