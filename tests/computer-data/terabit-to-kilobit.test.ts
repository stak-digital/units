import terabitToKilobit from '../../src/computer-data/terabit-to-kilobit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		terabitToKilobit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		terabitToKilobit(1)
	).toBe(1000000000);

});
