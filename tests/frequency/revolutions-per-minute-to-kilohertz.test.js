import revolutionsPerMinuteToKilohertz from '../../src/frequency/revolutions-per-minute-to-kilohertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		revolutionsPerMinuteToKilohertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		revolutionsPerMinuteToKilohertz(1)
	).toBe(0.000016666666666666667);

});
