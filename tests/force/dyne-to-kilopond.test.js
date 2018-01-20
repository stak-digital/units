import dyneToKilopond from '../../src/force/dyne-to-kilopond';
import expect from 'expect';

test('it should exist', () => {

	expect(
		dyneToKilopond
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		dyneToKilopond(1)
	).toBe(0.0000010197162129779282);

});
