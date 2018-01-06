import terabyteToGigabit from '../../src/computer-data/terabyte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToGigabit(1)
	).toBe(8000);

});
