import millisecondsToMinutes from '../../src/time/milliseconds-to-seconds';
import expect from 'expect';

describe('millisecondsToMinutes', () => {

	test('it should exist', () => {

		expect(
			millisecondsToMinutes
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneSecondInMilliseconds = 1000;

		expect(
			millisecondsToMinutes(oneSecondInMilliseconds)
		).toBe(1);

		expect(
			millisecondsToMinutes(oneSecondInMilliseconds * 5)
		).toBe(5);

		expect(
			millisecondsToMinutes(oneSecondInMilliseconds * 10)
		).toBe(10);

	});

});