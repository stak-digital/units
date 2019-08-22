import petabyteToMegabit from '../../src/computer-data/petabyte-to-megabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToMegabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToMegabit(1)
	).toBe(1000000000);

});
