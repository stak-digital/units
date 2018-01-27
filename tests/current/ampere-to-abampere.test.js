import ampereToAbampere from '../../src/current/ampere-to-abampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ampereToAbampere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ampereToAbampere(1)
	).toBe(0.1);

});
