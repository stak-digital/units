import petabyteToByte from '../../src/computer-data/petabyte-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		petabyteToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		petabyteToByte(1)
	).toBe(1000000000000000);

});
