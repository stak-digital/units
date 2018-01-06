import byteToTerabit from '../../src/computer-data/byte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		byteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		byteToTerabit(1)
	).toBe(8e-12);

});
