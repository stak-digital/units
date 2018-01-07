import minutesToSeconds from '../../src/time/minutes-to-seconds';
import expect from 'expect';

test('it should exist', () => {

	expect(
		minutesToSeconds
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		minutesToSeconds(1)
	).toBe(60);

});
