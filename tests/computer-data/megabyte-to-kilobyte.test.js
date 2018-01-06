import megabyteToKilobyte from '../../src/computer-data/megabyte-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToKilobyte(1)
	).toBe(1000);

});
