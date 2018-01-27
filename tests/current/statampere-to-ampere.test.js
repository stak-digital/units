import statampereToAmpere from '../../src/current/statampere-to-ampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		statampereToAmpere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		statampereToAmpere(1)
	).toBe(3.335641000000048e-10);

});
