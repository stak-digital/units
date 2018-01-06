import kilobitToByte from '../../src/computer-data/kilobit-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToByte(1)
	).toBe(125);

});
