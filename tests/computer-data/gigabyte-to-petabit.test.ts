import gigabyteToPetabit from '../../src/computer-data/gigabyte-to-petabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToPetabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToPetabit(1)
	).toBe(0.000008);

});
