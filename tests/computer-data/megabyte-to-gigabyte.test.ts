import megabyteToGigabyte from '../../src/computer-data/megabyte-to-gigabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToGigabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToGigabyte(1)
	).toBe(0.001);

});
