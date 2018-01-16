import megahertzToGigahertz from '../../src/frequency/megahertz-to-gigahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megahertzToGigahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megahertzToGigahertz(1)
	).toBe(0.001);

});
