"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ampere_to_abampere_1 = __importDefault(require("./current/ampere-to-abampere"));
var ampere_to_statampere_1 = __importDefault(require("./current/ampere-to-statampere"));
var abampere_to_ampere_1 = __importDefault(require("./current/abampere-to-ampere"));
var abampere_to_statampere_1 = __importDefault(require("./current/abampere-to-statampere"));
var statampere_to_ampere_1 = __importDefault(require("./current/statampere-to-ampere"));
var statampere_to_abampere_1 = __importDefault(require("./current/statampere-to-abampere"));
exports["default"] = {
    ampereToAbampere: ampere_to_abampere_1["default"],
    ampereToStatampere: ampere_to_statampere_1["default"],
    abampereToAmpere: abampere_to_ampere_1["default"],
    abampereToStatampere: abampere_to_statampere_1["default"],
    statampereToAmpere: statampere_to_ampere_1["default"],
    statampereToAbampere: statampere_to_abampere_1["default"]
};
