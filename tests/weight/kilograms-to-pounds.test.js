import kilogramsToPounds from '../../src/weight/kilograms-to-pounds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilogramsToPounds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilogramsToPounds(1)
	).toBe(2.20462);

});
