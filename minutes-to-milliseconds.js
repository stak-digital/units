'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (minutes) {
  return (0, _secondsToMilliseconds2.default)(minutes * 60);
};

var _secondsToMilliseconds = require('./seconds-to-milliseconds');

var _secondsToMilliseconds2 = _interopRequireDefault(_secondsToMilliseconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }