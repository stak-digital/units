import gigabyteToByte from '../../src/computer-data/gigabyte-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigabyteToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigabyteToByte(1)
	).toBe(1000000000);

});
