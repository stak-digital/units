import kilogramsToTonnes from '../../src/weight/kilograms-to-tonnes';
import expect from 'expect';

test('it should exist', () => {

	expect(
		kilogramsToTonnes
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		kilogramsToTonnes(1)
	).toBe(0.001);

});
