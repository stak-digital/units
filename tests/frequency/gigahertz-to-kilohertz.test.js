import gigahertzToKilohertz from '../../src/frequency/gigahertz-to-kilohertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigahertzToKilohertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigahertzToKilohertz(1)
	).toBe(10000000);

});
