import kilobitToKilobyte from '../../src/computer-data/kilobit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToKilobyte(1)
	).toBe(0.125);

});
