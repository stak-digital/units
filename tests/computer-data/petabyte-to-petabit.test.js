import petabyteToPetabit from '../../src/computer-data/petabyte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToPetabit(1)
	).toBe(8);

});
