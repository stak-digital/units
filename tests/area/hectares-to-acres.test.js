import hectaresToAcres from '../../src/area/hectares-to-acres';
import expect from 'expect';

test('it should exist', () => {

	expect(
		hectaresToAcres
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		hectaresToAcres(1)
	).toBe(2.471054);

});
