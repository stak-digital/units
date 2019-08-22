import kilohertzToHertz from '../../src/frequency/kilohertz-to-hertz';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilohertzToHertz
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilohertzToHertz(1)
	).toBe(1000);

});
