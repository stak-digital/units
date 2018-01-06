import terabitToByte from '../../src/computer-data/terabit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToByte(1)
	).toBe(125000000000);

});
