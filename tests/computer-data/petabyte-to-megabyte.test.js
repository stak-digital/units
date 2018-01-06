import petabyteToMegabyte from '../../src/computer-data/petabyte-to-megabyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToMegabyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToMegabyte(1)
	).toBe(1000000000);

});
