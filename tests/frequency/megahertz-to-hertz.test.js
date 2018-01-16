import megahertzToHertz from '../../src/frequency/megahertz-to-hertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megahertzToHertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megahertzToHertz(1)
	).toBe(1000000);

});
