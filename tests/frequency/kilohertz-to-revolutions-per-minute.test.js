import kilohertzToRevolutionsPerMinute from '../../src/frequency/kilohertz-to-revolutions-per-minute';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilohertzToRevolutionsPerMinute
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilohertzToRevolutionsPerMinute(1)
	).toBe(60000);

});
