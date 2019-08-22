import kilohertzToMegahertz from '../../src/frequency/kilohertz-to-megahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilohertzToMegahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilohertzToMegahertz(1)
	).toBe(0.001);

});
