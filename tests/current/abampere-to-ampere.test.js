import abampereToAmpere from '../../src/current/abampere-to-ampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		abampereToAmpere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		abampereToAmpere(1)
	).toBe(10);

});
