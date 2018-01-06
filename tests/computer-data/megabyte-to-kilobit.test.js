import megabyteToKilobit from '../../src/computer-data/megabyte-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToKilobit(1)
	).toBe(8000);

});
