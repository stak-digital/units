import megabyteToPetabit from '../../src/computer-data/megabyte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToPetabit(1)
	).toBe(8e-9);

});
