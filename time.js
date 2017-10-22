'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _secondsToMilliseconds = require('./time/seconds-to-milliseconds');

var _secondsToMilliseconds2 = _interopRequireDefault(_secondsToMilliseconds);

var _minutesToMilliseconds = require('./time/minutes-to-milliseconds');

var _minutesToMilliseconds2 = _interopRequireDefault(_minutesToMilliseconds);

var _hoursToMilliseconds = require('./time/hours-to-milliseconds');

var _hoursToMilliseconds2 = _interopRequireDefault(_hoursToMilliseconds);

var _daysToMilliseconds = require('./time/days-to-milliseconds');

var _daysToMilliseconds2 = _interopRequireDefault(_daysToMilliseconds);

var _millisecondsToSeconds = require('./time/milliseconds-to-seconds');

var _millisecondsToSeconds2 = _interopRequireDefault(_millisecondsToSeconds);

var _millisecondsToMinutes = require('./time/milliseconds-to-minutes');

var _millisecondsToMinutes2 = _interopRequireDefault(_millisecondsToMinutes);

var _millisecondsToHours = require('./time/milliseconds-to-hours');

var _millisecondsToHours2 = _interopRequireDefault(_millisecondsToHours);

var _millisecondsToDays = require('./time/milliseconds-to-days');

var _millisecondsToDays2 = _interopRequireDefault(_millisecondsToDays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	secondsToMilliseconds: _secondsToMilliseconds2.default,
	minutesToMilliseconds: _minutesToMilliseconds2.default,
	hoursToMilliseconds: _hoursToMilliseconds2.default,
	daysToMilliseconds: _daysToMilliseconds2.default,
	millisecondsToSeconds: _millisecondsToSeconds2.default,
	millisecondsToMinutes: _millisecondsToMinutes2.default,
	millisecondsToHours: _millisecondsToHours2.default,
	millisecondsToDays: _millisecondsToDays2.default
};