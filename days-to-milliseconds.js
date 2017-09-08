'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (days) {
  return (0, _hoursToMilliseconds2.default)(days * 24);
};

var _hoursToMilliseconds = require('./hours-to-milliseconds');

var _hoursToMilliseconds2 = _interopRequireDefault(_hoursToMilliseconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }