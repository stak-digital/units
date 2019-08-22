import megabyteToTerabyte from '../../src/computer-data/megabyte-to-terabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToTerabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToTerabyte(1)
	).toBe(0.000001);

});
