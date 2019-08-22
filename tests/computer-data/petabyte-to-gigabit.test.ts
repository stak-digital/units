import petabyteToGigabit from '../../src/computer-data/petabyte-to-gigabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToGigabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToGigabit(1)
	).toBe(8000000);

});
