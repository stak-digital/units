import metersToInches from '../../src/length/metersToInches';
import expect from 'expect';

test('it should exist', () => {

	expect(
		metersToInches
	).toExist();

});

test('the function should return the correct amount', () => {

	expect(
		metersToInches(1)
	).toBe(39.37);

});