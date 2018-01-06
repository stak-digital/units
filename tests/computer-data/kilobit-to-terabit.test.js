import kilobitToTerabit from '../../src/computer-data/kilobit-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilobitToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilobitToTerabit(1)
	).toBe(1e-9);

});
