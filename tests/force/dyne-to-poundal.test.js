import dyneToPoundal from '../../src/force/dyne-to-poundal';
import expect from 'expect';

test('it should exist', () => {

	expect(
		dyneToPoundal
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		dyneToPoundal(1)
	).toBe(0.00007233014080146858);

});
