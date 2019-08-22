import megabyteToBit from '../../src/computer-data/megabyte-to-bit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToBit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToBit(1)
	).toBe(8000000);

});
