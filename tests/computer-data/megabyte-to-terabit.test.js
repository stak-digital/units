import megabyteToTerabit from '../../src/computer-data/megabyte-to-terabit';
import expect from 'expect';

test('it should exist', () => {

	expect(
		megabyteToTerabit
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		megabyteToTerabit(1)
	).toBe(0.000008);

});
