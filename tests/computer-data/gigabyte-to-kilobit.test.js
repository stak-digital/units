import gigabyteToKilobit from '../../src/computer-data/gigabyte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToKilobit(1)
	).toBe(8000000);

});
