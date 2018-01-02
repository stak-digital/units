'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _kelvinToFahrenheit = require('./temperature/kelvin-to-fahrenheit.js');

var _kelvinToFahrenheit2 = _interopRequireDefault(_kelvinToFahrenheit);

var _kelvinToCelsius = require('./temperature/kelvin-to-celsius.js');

var _kelvinToCelsius2 = _interopRequireDefault(_kelvinToCelsius);

var _fahrenheitToKelvin = require('./temperature/fahrenheit-to-kelvin.js');

var _fahrenheitToKelvin2 = _interopRequireDefault(_fahrenheitToKelvin);

var _fahrenheitToCelsius = require('./temperature/fahrenheit-to-celsius.js');

var _fahrenheitToCelsius2 = _interopRequireDefault(_fahrenheitToCelsius);

var _celsiusToFahrenheit = require('./temperature/celsius-to-fahrenheit.js');

var _celsiusToFahrenheit2 = _interopRequireDefault(_celsiusToFahrenheit);

var _celsiusToKelvin = require('./temperature/celsius-to-kelvin.js');

var _celsiusToKelvin2 = _interopRequireDefault(_celsiusToKelvin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	kelvinToFahrenheit: _kelvinToFahrenheit2.default,
	kelvinToCelsius: _kelvinToCelsius2.default,
	fahrenheitToKelvin: _fahrenheitToKelvin2.default,
	fahrenheitToCelsius: _fahrenheitToCelsius2.default,
	celsiusToFahrenheit: _celsiusToFahrenheit2.default,
	celsiusToKelvin: _celsiusToKelvin2.default
};