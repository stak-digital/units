"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (microseconds) {
  return microseconds / 1000 / 1000 / 60 / 60 / 24;
};