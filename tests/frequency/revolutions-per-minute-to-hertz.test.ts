import revolutionsPerMinuteToHertz from '../../src/frequency/revolutions-per-minute-to-hertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		revolutionsPerMinuteToHertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		revolutionsPerMinuteToHertz(1)
	).toBe(0.016666666666666666);

});
