"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nanoseconds) {
  return nanoseconds / 1e+9 / 60 / 60 / 24;
};