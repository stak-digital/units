import ampereToStatampere from '../../src/current/ampere-to-statampere';
import expect from 'expect';

test('it should exist', () => {

	expect(
		ampereToStatampere
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		ampereToStatampere(1)
	).toBe(2997924536.8431435);

});
