import inchesToMeters from '../../src/length/inches-to-meters';
import expect from 'expect';

test('it should exist', () => {

	expect(
		inchesToMeters
	).toExist();

});

test('it should return the correct values', () => {

	const oneInchToMeters = 0.0254;

	expect(
		inchesToMeters(1)
	).toBe(oneInchToMeters);
	
	expect(
		inchesToMeters(2)
	).toBe(oneInchToMeters * 2);

	expect(
		inchesToMeters(5)
	).toBe(oneInchToMeters * 5);

	expect(
		inchesToMeters(10)
	).toBe(oneInchToMeters * 10);

});