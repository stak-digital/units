import weight from '../src/weight';
import expect from 'expect';

test('it should exist', () => {

	expect(
		weight
	).toExist();

});

test('it should have all weight properties', () => {

	
	expect(
		weight.kilogramsToPounds
	).toExist();

	expect(
		weight.kilogramsToPounds
	).toBeA(Function);
		
	expect(
		weight.kilogramsToStones
	).toExist();

	expect(
		weight.kilogramsToStones
	).toBeA(Function);
		
	expect(
		weight.kilogramsToTonnes
	).toExist();

	expect(
		weight.kilogramsToTonnes
	).toBeA(Function);
		
	expect(
		weight.poundsToKilograms
	).toExist();

	expect(
		weight.poundsToKilograms
	).toBeA(Function);
		
	expect(
		weight.poundsToStones
	).toExist();

	expect(
		weight.poundsToStones
	).toBeA(Function);
		
	expect(
		weight.poundsToTonnes
	).toExist();

	expect(
		weight.poundsToTonnes
	).toBeA(Function);
		
	expect(
		weight.stonesToKilograms
	).toExist();

	expect(
		weight.stonesToKilograms
	).toBeA(Function);
		
	expect(
		weight.stonesToPounds
	).toExist();

	expect(
		weight.stonesToPounds
	).toBeA(Function);
		
	expect(
		weight.stonesToTonnes
	).toExist();

	expect(
		weight.stonesToTonnes
	).toBeA(Function);
		
	expect(
		weight.tonnesToKilograms
	).toExist();

	expect(
		weight.tonnesToKilograms
	).toBeA(Function);
		
	expect(
		weight.tonnesToPounds
	).toExist();

	expect(
		weight.tonnesToPounds
	).toBeA(Function);
		
	expect(
		weight.tonnesToStones
	).toExist();

	expect(
		weight.tonnesToStones
	).toBeA(Function);
		

});
