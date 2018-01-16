import revolutionsPerMinuteToMegahertz from '../../src/frequency/revolutions-per-minute-to-megahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		revolutionsPerMinuteToMegahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		revolutionsPerMinuteToMegahertz(1)
	).toBe(1.6666666666666667e-8);

});
