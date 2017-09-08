import millisecondsToDays from '../../src/time/milliseconds-to-days';
import expect from 'expect';

describe('millisecondsToDays', () => {

	test('it should exist', () => {

		expect(
			millisecondsToDays
		).toExist();

	});

	test('it should return the correct values', () => {

		const oneDayInMilliseconds = 86400000;

		expect(
			millisecondsToDays(oneDayInMilliseconds)
		).toBe(1);

		expect(
			millisecondsToDays(oneDayInMilliseconds * 5)
		).toBe(5);

		expect(
			millisecondsToDays(oneDayInMilliseconds * 10)
		).toBe(10);

	});

});