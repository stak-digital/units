import kilobyteToByte from '../../src/computer-data/kilobyte-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobyteToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobyteToByte(1)
	).toBe(1000);

});
