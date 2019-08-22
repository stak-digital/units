import petabyteToKilobyte from '../../src/computer-data/petabyte-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToKilobyte(1)
	).toBe(1000000000000);

});
