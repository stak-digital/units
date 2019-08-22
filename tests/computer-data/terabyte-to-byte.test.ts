import terabyteToByte from '../../src/computer-data/terabyte-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToByte(1)
	).toBe(1000000000000);

});
