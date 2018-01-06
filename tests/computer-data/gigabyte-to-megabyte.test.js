import gigabyteToMegabyte from '../../src/computer-data/gigabyte-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToMegabyte(1)
	).toBe(1000);

});
