import petabyteToKilobit from '../../src/computer-data/petabyte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToKilobit(1)
	).toBe(8000000000000);

});
