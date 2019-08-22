import byteToMegabit from '../../src/computer-data/byte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToMegabit(1)
	).toBe(0.000008);

});
