import gigahertzToHertz from '../../src/frequency/gigahertz-to-hertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		gigahertzToHertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		gigahertzToHertz(1)
	).toBe(10000000000);

});
