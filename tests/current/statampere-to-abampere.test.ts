import statampereToAbampere from '../../src/current/statampere-to-abampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		statampereToAbampere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		statampereToAbampere(1)
	).toBe(3.335641000000048e-11);

});
