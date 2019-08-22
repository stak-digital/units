import terabyteToMegabit from '../../src/computer-data/terabyte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToMegabit(1)
	).toBe(8000000);

});
