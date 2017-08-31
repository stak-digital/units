import inchesToFeet from '../../src/length/inches-to-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		inchesToFeet
	).toExist();

});

test('it should return the correct values', () => {

	const oneInchToFeet = 0.0833333;

	expect(
		inchesToFeet(1)
	).toBe(oneInchToFeet);

	expect(
		inchesToFeet(2)
	).toBe(oneInchToFeet * 2);

	expect(
		inchesToFeet(5)
	).toBe(oneInchToFeet * 5);

	expect(
		inchesToFeet(10)
	).toBe(oneInchToFeet * 10);

});