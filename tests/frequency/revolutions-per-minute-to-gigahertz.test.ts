import revolutionsPerMinuteToGigahertz from '../../src/frequency/revolutions-per-minute-to-gigahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		revolutionsPerMinuteToGigahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		revolutionsPerMinuteToGigahertz(1)
	).toBe(1.6666666666666667e-11);

});
