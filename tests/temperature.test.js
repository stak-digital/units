import temperature from '../src/temperature';
import expect from 'expect';

test('it should exist', () => {

	expect(
		temperature
	).toExist();

});

test('it should have all temperature properties', () => {

	
	expect(
		temperature.kelvinToFahrenheit
	).toExist();
	
	expect(
		temperature.kelvinToFahrenheit
	).toBeA(Function);
		
	expect(
		temperature.kelvinToCelsius
	).toExist();
	
	expect(
		temperature.kelvinToCelsius
	).toBeA(Function);
		
	expect(
		temperature.fahrenheitToKelvin
	).toExist();
	
	expect(
		temperature.fahrenheitToKelvin
	).toBeA(Function);
		
	expect(
		temperature.fahrenheitToCelsius
	).toExist();
	
	expect(
		temperature.fahrenheitToCelsius
	).toBeA(Function);
		
	expect(
		temperature.celsiusToFahrenheit
	).toExist();
	
	expect(
		temperature.celsiusToFahrenheit
	).toBeA(Function);
		
	expect(
		temperature.celsiusToKelvin
	).toExist();
	
	expect(
		temperature.celsiusToKelvin
	).toBeA(Function);
		

});
