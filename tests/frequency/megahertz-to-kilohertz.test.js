import megahertzToKilohertz from '../../src/frequency/megahertz-to-kilohertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megahertzToKilohertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megahertzToKilohertz(1)
	).toBe(1000);

});
