import length from '../src/length';
import expect from 'expect';

test('it should exist', () => {

	expect(
		length
	).toExist();

});

test('it should have all length properties', () => {

	expect(
		length.feetToInches
	).toExist();

	expect(
		length.feetToInches
	).toBeA(Function);

	expect(
		length.feetToMeters
	).toExist();

	expect(
		length.feetToMeters
	).toBeA(Function);

	expect(
		length.inchesToFeet
	).toExist();

	expect(
		length.inchesToFeet
	).toBeA(Function);

	expect(
		length.inchesToMeters
	).toExist();

	expect(
		length.inchesToMeters
	).toBeA(Function);

	expect(
		length.metersToFeet
	).toExist();

	expect(
		length.metersToFeet
	).toBeA(Function);

	expect(
		length.metersToInches
	).toExist();

	expect(
		length.metersToInches
	).toBeA(Function);

});