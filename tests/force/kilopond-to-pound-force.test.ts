import kilopondToPoundForce from '../../src/force/kilopond-to-pound-force';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilopondToPoundForce
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilopondToPoundForce(1)
	).toBe(2.204622629412178);

});
