import petabyteToTerabit from '../../src/computer-data/petabyte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToTerabit(1)
	).toBe(8000);

});
