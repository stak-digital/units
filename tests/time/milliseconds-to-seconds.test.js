import millisecondsToSeconds from '../../src/time/milliseconds-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		millisecondsToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		millisecondsToSeconds(1)
	).toBe(0.001);

});
