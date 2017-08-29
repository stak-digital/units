import metersToInches from '../../src/length/meters-to-inches';
import expect from 'expect';

test('it should exist', () => {

	expect(
		metersToInches
	).toExist();

});

test('it should return the correct values', () => {

	const oneMeterToInches = 39.3701;

	expect(
		metersToInches(1)
	).toBe(oneMeterToInches);

	expect(
		metersToInches(2)
	).toBe(oneMeterToInches * 2);

	expect(
		metersToInches(5)
	).toBe(oneMeterToInches * 5);

	expect(
		metersToInches(10)
	).toBe(oneMeterToInches * 10);

});