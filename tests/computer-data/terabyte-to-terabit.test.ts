import terabyteToTerabit from '../../src/computer-data/terabyte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabyteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabyteToTerabit(1)
	).toBe(8);

});
