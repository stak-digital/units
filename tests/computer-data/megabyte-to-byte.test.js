import megabyteToByte from '../../src/computer-data/megabyte-to-byte';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToByte
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToByte(1)
	).toBe(1000000);

});
