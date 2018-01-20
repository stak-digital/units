import newtonToPoundForce from '../../src/force/newton-to-pound-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		newtonToPoundForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		newtonToPoundForce(1)
	).toBe(0.22480894387096);

});
