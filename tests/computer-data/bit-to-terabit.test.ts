import bitToTerabit from '../../src/computer-data/bit-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		bitToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		bitToTerabit(1)
	).toBe(1e-12);

});
