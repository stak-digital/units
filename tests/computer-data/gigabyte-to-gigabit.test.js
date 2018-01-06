import gigabyteToGigabit from '../../src/computer-data/gigabyte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToGigabit(1)
	).toBe(8);

});
