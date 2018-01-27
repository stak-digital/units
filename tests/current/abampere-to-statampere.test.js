import abampereToStatampere from '../../src/current/abampere-to-statampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		abampereToStatampere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		abampereToStatampere(1)
	).toBe(29979245368.43144);

});
