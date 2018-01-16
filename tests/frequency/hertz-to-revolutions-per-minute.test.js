import hertzToRevolutionsPerMinute from '../../src/frequency/hertz-to-revolutions-per-minute';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hertzToRevolutionsPerMinute
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hertzToRevolutionsPerMinute(1)
	).toBe(0.016666666666666666);

});
