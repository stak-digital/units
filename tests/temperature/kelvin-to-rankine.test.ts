import kelvinToRankine from '../../src/temperature/kelvin-to-rankine';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kelvinToRankine
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kelvinToRankine(1)
	).toBe(1.8);

});
