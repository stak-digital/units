import terabitToKilobyte from '../../src/computer-data/terabit-to-kilobyte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToKilobyte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToKilobyte(1)
	).toBe(125000000);

});
