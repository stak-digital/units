"use strict";
exports.__esModule = true;
/**
 * Converts Nanoseconds (ns) to Hours (h)
 * @param {number} nanoseconds
 * @returns {number}
 */
function default_1(nanoseconds) {
    return nanoseconds / 1e+9 / 60 / 60;
}
exports["default"] = default_1;
