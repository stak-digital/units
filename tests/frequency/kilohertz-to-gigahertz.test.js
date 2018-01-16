import kilohertzToGigahertz from '../../src/frequency/kilohertz-to-gigahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilohertzToGigahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilohertzToGigahertz(1)
	).toBe(1e-7);

});
