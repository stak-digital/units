import area from '../src/area';
import expect from 'expect';

test('it should exist', () => {

	expect(
		area
	).toExist();

});

test('it should have all area properties', () => {

	
	expect(
		area.squareMetersToSquareFeet
	).toExist();
	
	expect(
		area.squareMetersToSquareFeet
	).toBeA(Function);
		
	expect(
		area.squareMetersToHectares
	).toExist();
	
	expect(
		area.squareMetersToHectares
	).toBeA(Function);
		
	expect(
		area.hectaresToSquareMeters
	).toExist();
	
	expect(
		area.hectaresToSquareMeters
	).toBeA(Function);
		
	expect(
		area.hectaresToSquareFeet
	).toExist();
	
	expect(
		area.hectaresToSquareFeet
	).toBeA(Function);
		
	expect(
		area.squareFeetToSquareMeters
	).toExist();
	
	expect(
		area.squareFeetToSquareMeters
	).toBeA(Function);
		
	expect(
		area.squareFeetToHectares
	).toExist();
	
	expect(
		area.squareFeetToHectares
	).toBeA(Function);
		
	expect(
		area.squareKilometersToSquareMeters
	).toExist();
	
	expect(
		area.squareKilometersToSquareMeters
	).toBeA(Function);
		
	expect(
		area.squareKilometersToSquareFeet
	).toExist();
	
	expect(
		area.squareKilometersToSquareFeet
	).toBeA(Function);
		
	expect(
		area.squareKilometersToHectares
	).toExist();
	
	expect(
		area.squareKilometersToHectares
	).toBeA(Function);
		

});
