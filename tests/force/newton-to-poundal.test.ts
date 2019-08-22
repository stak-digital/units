import newtonToPoundal from '../../src/force/newton-to-poundal';
import expect from 'expect';

test('it should exist', () => {

	expect(
		newtonToPoundal
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		newtonToPoundal(1)
	).toBe(7.2330140801469);

});
