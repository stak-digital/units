import newtonToKilopond from '../../src/force/newton-to-kilopond';
import expect from 'expect';

test('it should exist', () => {

	expect(
		newtonToKilopond
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		newtonToKilopond(1)
	).toBe(0.10197162129779283);

});
