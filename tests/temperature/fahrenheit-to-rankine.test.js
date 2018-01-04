import fahrenheitToRankine from '../../src/temperature/fahrenheit-to-rankine';
import expect from 'expect';

test('it should exist', () => {

	expect(
		fahrenheitToRankine
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		fahrenheitToRankine(1)
	).toBe(460.67);

});	
