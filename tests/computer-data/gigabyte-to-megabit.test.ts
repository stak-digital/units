import gigabyteToMegabit from '../../src/computer-data/gigabyte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToMegabit(1)
	).toBe(8000);

});
