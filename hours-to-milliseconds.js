'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (hours) {
  return (0, _minutesToMilliseconds2.default)(hours * 60);
};

var _minutesToMilliseconds = require('./minutes-to-milliseconds');

var _minutesToMilliseconds2 = _interopRequireDefault(_minutesToMilliseconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }