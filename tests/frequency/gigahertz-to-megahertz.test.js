import gigahertzToMegahertz from '../../src/frequency/gigahertz-to-megahertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigahertzToMegahertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigahertzToMegahertz(1)
	).toBe(1000);

});
