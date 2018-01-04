import celsiusToRankine from '../../src/temperature/celsius-to-rankine';
import expect from 'expect';

test('it should exist', () => {

	expect(
		celsiusToRankine
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		celsiusToRankine(1)
	).toBe(493.46999999999997);

});	
