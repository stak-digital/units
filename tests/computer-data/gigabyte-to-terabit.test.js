import gigabyteToTerabit from '../../src/computer-data/gigabyte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToTerabit(1)
	).toBe(0.008);

});
