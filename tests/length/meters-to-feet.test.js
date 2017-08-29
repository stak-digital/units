import metersToFeet from '../../src/length/meters-to-feet';
import expect from 'expect';

test('it should exist', () => {

	expect(
		metersToFeet
	).toExist();

});

test('it should return the correct values', () => {

	const oneMeterToFeet = 3.28084;

	expect(
		metersToFeet(1)
	).toBe(oneMeterToFeet);

	expect(
		metersToFeet(2)
	).toBe(oneMeterToFeet * 2);

	expect(
		metersToFeet(5)
	).toBe(oneMeterToFeet * 5);

	expect(
		metersToFeet(10)
	).toBe(oneMeterToFeet * 10);

});