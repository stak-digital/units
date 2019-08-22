import byteToGigabit from '../../src/computer-data/byte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToGigabit(1)
	).toBe(8e-9);

});
