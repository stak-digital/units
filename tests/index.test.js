import units from '../src/index';
import expect from 'expect';

test('it should exist', () => {

	expect(
		units
	).toExist();

});

test('it should have length properties', () => {

	expect(
		units.inchesToMeters
	).toExist();

	expect(
		units.inchesToMeters
	).toBeA(Function);

});