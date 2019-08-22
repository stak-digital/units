import gigahertzToRevolutionsPerMinute from '../../src/frequency/gigahertz-to-revolutions-per-minute';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigahertzToRevolutionsPerMinute
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigahertzToRevolutionsPerMinute(1)
	).toBe(60000000000);

});
