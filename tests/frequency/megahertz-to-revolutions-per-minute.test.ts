import megahertzToRevolutionsPerMinute from '../../src/frequency/megahertz-to-revolutions-per-minute';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megahertzToRevolutionsPerMinute
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megahertzToRevolutionsPerMinute(1)
	).toBe(60000000);

});
