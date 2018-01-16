import hertzToKilohertz from '../../src/frequency/hertz-to-kilohertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hertzToKilohertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hertzToKilohertz(1)
	).toBe(0.001);

});
