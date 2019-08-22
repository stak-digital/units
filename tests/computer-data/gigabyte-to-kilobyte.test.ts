import gigabyteToKilobyte from '../../src/computer-data/gigabyte-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToKilobyte(1)
	).toBe(1000000);

});
