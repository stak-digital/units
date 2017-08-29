import length from '../src/length';
import expect from 'expect';

test('it should exist', () => {

	expect(
		length
	).toExist();

	expect(
		length.feetToMeters
	).toExist();

	expect(
		length.inchesToMeters
	).toExist();

	expect(
		length.metersToFeet
	).toExist();

	expect(
		length.metersToInches
	).toExist();

});