import current from '../src/current';
import expect from 'expect';

test('it should exist', () => {

	expect(
		current
	).toExist();

});

test('it should have all current properties', () => {

	
	expect(
		current.ampereToAbampere
	).toExist();

	expect(
		current.ampereToAbampere
	).toBeA(Function);
		
	expect(
		current.ampereToStatampere
	).toExist();

	expect(
		current.ampereToStatampere
	).toBeA(Function);
		
	expect(
		current.abampereToAmpere
	).toExist();

	expect(
		current.abampereToAmpere
	).toBeA(Function);
		
	expect(
		current.abampereToStatampere
	).toExist();

	expect(
		current.abampereToStatampere
	).toBeA(Function);
		
	expect(
		current.statampereToAmpere
	).toExist();

	expect(
		current.statampereToAmpere
	).toBeA(Function);
		
	expect(
		current.statampereToAbampere
	).toExist();

	expect(
		current.statampereToAbampere
	).toBeA(Function);
		

});
