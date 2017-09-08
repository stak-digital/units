import minutesToMilliseconds from '../../src/time/minutes-to-milliseconds';
import expect from 'expect';

describe('minutesToMilliseconds', () => {

	test('it should exist', () => {

		expect(
			minutesToMilliseconds
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneMinuteInMilliseconds = 60000;

		expect(
			minutesToMilliseconds(1)
		).toBe(oneMinuteInMilliseconds);

		expect(
			minutesToMilliseconds(5)
		).toBe(oneMinuteInMilliseconds * 5);

		expect(
			minutesToMilliseconds(10)
		).toBe(oneMinuteInMilliseconds * 10);

	});

});