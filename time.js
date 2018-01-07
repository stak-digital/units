'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nanosecondsToMicroseconds = require('./time/nanoseconds-to-microseconds.js');

var _nanosecondsToMicroseconds2 = _interopRequireDefault(_nanosecondsToMicroseconds);

var _nanosecondsToMilliseconds = require('./time/nanoseconds-to-milliseconds.js');

var _nanosecondsToMilliseconds2 = _interopRequireDefault(_nanosecondsToMilliseconds);

var _nanosecondsToSeconds = require('./time/nanoseconds-to-seconds.js');

var _nanosecondsToSeconds2 = _interopRequireDefault(_nanosecondsToSeconds);

var _nanosecondsToMinutes = require('./time/nanoseconds-to-minutes.js');

var _nanosecondsToMinutes2 = _interopRequireDefault(_nanosecondsToMinutes);

var _nanosecondsToHours = require('./time/nanoseconds-to-hours.js');

var _nanosecondsToHours2 = _interopRequireDefault(_nanosecondsToHours);

var _nanosecondsToDays = require('./time/nanoseconds-to-days.js');

var _nanosecondsToDays2 = _interopRequireDefault(_nanosecondsToDays);

var _microsecondsToNanoseconds = require('./time/microseconds-to-nanoseconds.js');

var _microsecondsToNanoseconds2 = _interopRequireDefault(_microsecondsToNanoseconds);

var _microsecondsToMilliseconds = require('./time/microseconds-to-milliseconds.js');

var _microsecondsToMilliseconds2 = _interopRequireDefault(_microsecondsToMilliseconds);

var _microsecondsToSeconds = require('./time/microseconds-to-seconds.js');

var _microsecondsToSeconds2 = _interopRequireDefault(_microsecondsToSeconds);

var _microsecondsToMinutes = require('./time/microseconds-to-minutes.js');

var _microsecondsToMinutes2 = _interopRequireDefault(_microsecondsToMinutes);

var _microsecondsToHours = require('./time/microseconds-to-hours.js');

var _microsecondsToHours2 = _interopRequireDefault(_microsecondsToHours);

var _microsecondsToDays = require('./time/microseconds-to-days.js');

var _microsecondsToDays2 = _interopRequireDefault(_microsecondsToDays);

var _millisecondsToNanoseconds = require('./time/milliseconds-to-nanoseconds.js');

var _millisecondsToNanoseconds2 = _interopRequireDefault(_millisecondsToNanoseconds);

var _millisecondsToMicroseconds = require('./time/milliseconds-to-microseconds.js');

var _millisecondsToMicroseconds2 = _interopRequireDefault(_millisecondsToMicroseconds);

var _millisecondsToSeconds = require('./time/milliseconds-to-seconds.js');

var _millisecondsToSeconds2 = _interopRequireDefault(_millisecondsToSeconds);

var _millisecondsToMinutes = require('./time/milliseconds-to-minutes.js');

var _millisecondsToMinutes2 = _interopRequireDefault(_millisecondsToMinutes);

var _millisecondsToHours = require('./time/milliseconds-to-hours.js');

var _millisecondsToHours2 = _interopRequireDefault(_millisecondsToHours);

var _millisecondsToDays = require('./time/milliseconds-to-days.js');

var _millisecondsToDays2 = _interopRequireDefault(_millisecondsToDays);

var _secondsToNanoseconds = require('./time/seconds-to-nanoseconds.js');

var _secondsToNanoseconds2 = _interopRequireDefault(_secondsToNanoseconds);

var _secondsToMicroseconds = require('./time/seconds-to-microseconds.js');

var _secondsToMicroseconds2 = _interopRequireDefault(_secondsToMicroseconds);

var _secondsToMilliseconds = require('./time/seconds-to-milliseconds.js');

var _secondsToMilliseconds2 = _interopRequireDefault(_secondsToMilliseconds);

var _secondsToMinutes = require('./time/seconds-to-minutes.js');

var _secondsToMinutes2 = _interopRequireDefault(_secondsToMinutes);

var _secondsToHours = require('./time/seconds-to-hours.js');

var _secondsToHours2 = _interopRequireDefault(_secondsToHours);

var _secondsToDays = require('./time/seconds-to-days.js');

var _secondsToDays2 = _interopRequireDefault(_secondsToDays);

var _minutesToNanoseconds = require('./time/minutes-to-nanoseconds.js');

var _minutesToNanoseconds2 = _interopRequireDefault(_minutesToNanoseconds);

var _minutesToMicroseconds = require('./time/minutes-to-microseconds.js');

var _minutesToMicroseconds2 = _interopRequireDefault(_minutesToMicroseconds);

var _minutesToMilliseconds = require('./time/minutes-to-milliseconds.js');

var _minutesToMilliseconds2 = _interopRequireDefault(_minutesToMilliseconds);

var _minutesToSeconds = require('./time/minutes-to-seconds.js');

var _minutesToSeconds2 = _interopRequireDefault(_minutesToSeconds);

var _minutesToHours = require('./time/minutes-to-hours.js');

var _minutesToHours2 = _interopRequireDefault(_minutesToHours);

var _minutesToDays = require('./time/minutes-to-days.js');

var _minutesToDays2 = _interopRequireDefault(_minutesToDays);

var _hoursToNanoseconds = require('./time/hours-to-nanoseconds.js');

var _hoursToNanoseconds2 = _interopRequireDefault(_hoursToNanoseconds);

var _hoursToMicroseconds = require('./time/hours-to-microseconds.js');

var _hoursToMicroseconds2 = _interopRequireDefault(_hoursToMicroseconds);

var _hoursToMilliseconds = require('./time/hours-to-milliseconds.js');

var _hoursToMilliseconds2 = _interopRequireDefault(_hoursToMilliseconds);

var _hoursToSeconds = require('./time/hours-to-seconds.js');

var _hoursToSeconds2 = _interopRequireDefault(_hoursToSeconds);

var _hoursToMinutes = require('./time/hours-to-minutes.js');

var _hoursToMinutes2 = _interopRequireDefault(_hoursToMinutes);

var _hoursToDays = require('./time/hours-to-days.js');

var _hoursToDays2 = _interopRequireDefault(_hoursToDays);

var _daysToNanoseconds = require('./time/days-to-nanoseconds.js');

var _daysToNanoseconds2 = _interopRequireDefault(_daysToNanoseconds);

var _daysToMicroseconds = require('./time/days-to-microseconds.js');

var _daysToMicroseconds2 = _interopRequireDefault(_daysToMicroseconds);

var _daysToMilliseconds = require('./time/days-to-milliseconds.js');

var _daysToMilliseconds2 = _interopRequireDefault(_daysToMilliseconds);

var _daysToSeconds = require('./time/days-to-seconds.js');

var _daysToSeconds2 = _interopRequireDefault(_daysToSeconds);

var _daysToMinutes = require('./time/days-to-minutes.js');

var _daysToMinutes2 = _interopRequireDefault(_daysToMinutes);

var _daysToHours = require('./time/days-to-hours.js');

var _daysToHours2 = _interopRequireDefault(_daysToHours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	nanosecondsToMicroseconds: _nanosecondsToMicroseconds2.default,
	nanosecondsToMilliseconds: _nanosecondsToMilliseconds2.default,
	nanosecondsToSeconds: _nanosecondsToSeconds2.default,
	nanosecondsToMinutes: _nanosecondsToMinutes2.default,
	nanosecondsToHours: _nanosecondsToHours2.default,
	nanosecondsToDays: _nanosecondsToDays2.default,
	microsecondsToNanoseconds: _microsecondsToNanoseconds2.default,
	microsecondsToMilliseconds: _microsecondsToMilliseconds2.default,
	microsecondsToSeconds: _microsecondsToSeconds2.default,
	microsecondsToMinutes: _microsecondsToMinutes2.default,
	microsecondsToHours: _microsecondsToHours2.default,
	microsecondsToDays: _microsecondsToDays2.default,
	millisecondsToNanoseconds: _millisecondsToNanoseconds2.default,
	millisecondsToMicroseconds: _millisecondsToMicroseconds2.default,
	millisecondsToSeconds: _millisecondsToSeconds2.default,
	millisecondsToMinutes: _millisecondsToMinutes2.default,
	millisecondsToHours: _millisecondsToHours2.default,
	millisecondsToDays: _millisecondsToDays2.default,
	secondsToNanoseconds: _secondsToNanoseconds2.default,
	secondsToMicroseconds: _secondsToMicroseconds2.default,
	secondsToMilliseconds: _secondsToMilliseconds2.default,
	secondsToMinutes: _secondsToMinutes2.default,
	secondsToHours: _secondsToHours2.default,
	secondsToDays: _secondsToDays2.default,
	minutesToNanoseconds: _minutesToNanoseconds2.default,
	minutesToMicroseconds: _minutesToMicroseconds2.default,
	minutesToMilliseconds: _minutesToMilliseconds2.default,
	minutesToSeconds: _minutesToSeconds2.default,
	minutesToHours: _minutesToHours2.default,
	minutesToDays: _minutesToDays2.default,
	hoursToNanoseconds: _hoursToNanoseconds2.default,
	hoursToMicroseconds: _hoursToMicroseconds2.default,
	hoursToMilliseconds: _hoursToMilliseconds2.default,
	hoursToSeconds: _hoursToSeconds2.default,
	hoursToMinutes: _hoursToMinutes2.default,
	hoursToDays: _hoursToDays2.default,
	daysToNanoseconds: _daysToNanoseconds2.default,
	daysToMicroseconds: _daysToMicroseconds2.default,
	daysToMilliseconds: _daysToMilliseconds2.default,
	daysToSeconds: _daysToSeconds2.default,
	daysToMinutes: _daysToMinutes2.default,
	daysToHours: _daysToHours2.default
};