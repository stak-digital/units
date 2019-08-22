"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bit_to_byte_1 = __importDefault(require("./computer-data/bit-to-byte"));
var bit_to_kilobit_1 = __importDefault(require("./computer-data/bit-to-kilobit"));
var bit_to_kilobyte_1 = __importDefault(require("./computer-data/bit-to-kilobyte"));
var bit_to_megabit_1 = __importDefault(require("./computer-data/bit-to-megabit"));
var bit_to_megabyte_1 = __importDefault(require("./computer-data/bit-to-megabyte"));
var bit_to_gigabit_1 = __importDefault(require("./computer-data/bit-to-gigabit"));
var bit_to_gigabyte_1 = __importDefault(require("./computer-data/bit-to-gigabyte"));
var bit_to_terabit_1 = __importDefault(require("./computer-data/bit-to-terabit"));
var bit_to_terabyte_1 = __importDefault(require("./computer-data/bit-to-terabyte"));
var bit_to_petabit_1 = __importDefault(require("./computer-data/bit-to-petabit"));
var bit_to_petabyte_1 = __importDefault(require("./computer-data/bit-to-petabyte"));
var byte_to_bit_1 = __importDefault(require("./computer-data/byte-to-bit"));
var byte_to_kilobit_1 = __importDefault(require("./computer-data/byte-to-kilobit"));
var byte_to_kilobyte_1 = __importDefault(require("./computer-data/byte-to-kilobyte"));
var byte_to_megabit_1 = __importDefault(require("./computer-data/byte-to-megabit"));
var byte_to_megabyte_1 = __importDefault(require("./computer-data/byte-to-megabyte"));
var byte_to_gigabit_1 = __importDefault(require("./computer-data/byte-to-gigabit"));
var byte_to_gigabyte_1 = __importDefault(require("./computer-data/byte-to-gigabyte"));
var byte_to_terabit_1 = __importDefault(require("./computer-data/byte-to-terabit"));
var byte_to_terabyte_1 = __importDefault(require("./computer-data/byte-to-terabyte"));
var byte_to_petabit_1 = __importDefault(require("./computer-data/byte-to-petabit"));
var byte_to_petabyte_1 = __importDefault(require("./computer-data/byte-to-petabyte"));
var kilobit_to_bit_1 = __importDefault(require("./computer-data/kilobit-to-bit"));
var kilobit_to_byte_1 = __importDefault(require("./computer-data/kilobit-to-byte"));
var kilobit_to_kilobyte_1 = __importDefault(require("./computer-data/kilobit-to-kilobyte"));
var kilobit_to_megabit_1 = __importDefault(require("./computer-data/kilobit-to-megabit"));
var kilobit_to_megabyte_1 = __importDefault(require("./computer-data/kilobit-to-megabyte"));
var kilobit_to_gigabit_1 = __importDefault(require("./computer-data/kilobit-to-gigabit"));
var kilobit_to_gigabyte_1 = __importDefault(require("./computer-data/kilobit-to-gigabyte"));
var kilobit_to_terabit_1 = __importDefault(require("./computer-data/kilobit-to-terabit"));
var kilobit_to_terabyte_1 = __importDefault(require("./computer-data/kilobit-to-terabyte"));
var kilobit_to_petabit_1 = __importDefault(require("./computer-data/kilobit-to-petabit"));
var kilobit_to_petabyte_1 = __importDefault(require("./computer-data/kilobit-to-petabyte"));
var kilobyte_to_bit_1 = __importDefault(require("./computer-data/kilobyte-to-bit"));
var kilobyte_to_byte_1 = __importDefault(require("./computer-data/kilobyte-to-byte"));
var kilobyte_to_kilobit_1 = __importDefault(require("./computer-data/kilobyte-to-kilobit"));
var kilobyte_to_megabit_1 = __importDefault(require("./computer-data/kilobyte-to-megabit"));
var kilobyte_to_megabyte_1 = __importDefault(require("./computer-data/kilobyte-to-megabyte"));
var kilobyte_to_gigabit_1 = __importDefault(require("./computer-data/kilobyte-to-gigabit"));
var kilobyte_to_gigabyte_1 = __importDefault(require("./computer-data/kilobyte-to-gigabyte"));
var kilobyte_to_terabit_1 = __importDefault(require("./computer-data/kilobyte-to-terabit"));
var kilobyte_to_terabyte_1 = __importDefault(require("./computer-data/kilobyte-to-terabyte"));
var kilobyte_to_petabit_1 = __importDefault(require("./computer-data/kilobyte-to-petabit"));
var kilobyte_to_petabyte_1 = __importDefault(require("./computer-data/kilobyte-to-petabyte"));
var megabit_to_bit_1 = __importDefault(require("./computer-data/megabit-to-bit"));
var megabit_to_byte_1 = __importDefault(require("./computer-data/megabit-to-byte"));
var megabit_to_kilobit_1 = __importDefault(require("./computer-data/megabit-to-kilobit"));
var megabit_to_kilobyte_1 = __importDefault(require("./computer-data/megabit-to-kilobyte"));
var megabit_to_megabyte_1 = __importDefault(require("./computer-data/megabit-to-megabyte"));
var megabit_to_gigabit_1 = __importDefault(require("./computer-data/megabit-to-gigabit"));
var megabit_to_gigabyte_1 = __importDefault(require("./computer-data/megabit-to-gigabyte"));
var megabit_to_terabit_1 = __importDefault(require("./computer-data/megabit-to-terabit"));
var megabit_to_terabyte_1 = __importDefault(require("./computer-data/megabit-to-terabyte"));
var megabit_to_petabit_1 = __importDefault(require("./computer-data/megabit-to-petabit"));
var megabit_to_petabyte_1 = __importDefault(require("./computer-data/megabit-to-petabyte"));
var megabyte_to_bit_1 = __importDefault(require("./computer-data/megabyte-to-bit"));
var megabyte_to_byte_1 = __importDefault(require("./computer-data/megabyte-to-byte"));
var megabyte_to_kilobit_1 = __importDefault(require("./computer-data/megabyte-to-kilobit"));
var megabyte_to_kilobyte_1 = __importDefault(require("./computer-data/megabyte-to-kilobyte"));
var megabyte_to_megabit_1 = __importDefault(require("./computer-data/megabyte-to-megabit"));
var megabyte_to_gigabit_1 = __importDefault(require("./computer-data/megabyte-to-gigabit"));
var megabyte_to_gigabyte_1 = __importDefault(require("./computer-data/megabyte-to-gigabyte"));
var megabyte_to_terabit_1 = __importDefault(require("./computer-data/megabyte-to-terabit"));
var megabyte_to_terabyte_1 = __importDefault(require("./computer-data/megabyte-to-terabyte"));
var megabyte_to_petabit_1 = __importDefault(require("./computer-data/megabyte-to-petabit"));
var megabyte_to_petabyte_1 = __importDefault(require("./computer-data/megabyte-to-petabyte"));
var gigabit_to_bit_1 = __importDefault(require("./computer-data/gigabit-to-bit"));
var gigabit_to_byte_1 = __importDefault(require("./computer-data/gigabit-to-byte"));
var gigabit_to_kilobit_1 = __importDefault(require("./computer-data/gigabit-to-kilobit"));
var gigabit_to_kilobyte_1 = __importDefault(require("./computer-data/gigabit-to-kilobyte"));
var gigabit_to_megabit_1 = __importDefault(require("./computer-data/gigabit-to-megabit"));
var gigabit_to_megabyte_1 = __importDefault(require("./computer-data/gigabit-to-megabyte"));
var gigabit_to_gigabyte_1 = __importDefault(require("./computer-data/gigabit-to-gigabyte"));
var gigabit_to_terabit_1 = __importDefault(require("./computer-data/gigabit-to-terabit"));
var gigabit_to_terabyte_1 = __importDefault(require("./computer-data/gigabit-to-terabyte"));
var gigabit_to_petabit_1 = __importDefault(require("./computer-data/gigabit-to-petabit"));
var gigabit_to_petabyte_1 = __importDefault(require("./computer-data/gigabit-to-petabyte"));
var gigabyte_to_bit_1 = __importDefault(require("./computer-data/gigabyte-to-bit"));
var gigabyte_to_byte_1 = __importDefault(require("./computer-data/gigabyte-to-byte"));
var gigabyte_to_kilobit_1 = __importDefault(require("./computer-data/gigabyte-to-kilobit"));
var gigabyte_to_kilobyte_1 = __importDefault(require("./computer-data/gigabyte-to-kilobyte"));
var gigabyte_to_megabit_1 = __importDefault(require("./computer-data/gigabyte-to-megabit"));
var gigabyte_to_megabyte_1 = __importDefault(require("./computer-data/gigabyte-to-megabyte"));
var gigabyte_to_gigabit_1 = __importDefault(require("./computer-data/gigabyte-to-gigabit"));
var gigabyte_to_terabit_1 = __importDefault(require("./computer-data/gigabyte-to-terabit"));
var gigabyte_to_terabyte_1 = __importDefault(require("./computer-data/gigabyte-to-terabyte"));
var gigabyte_to_petabit_1 = __importDefault(require("./computer-data/gigabyte-to-petabit"));
var gigabyte_to_petabyte_1 = __importDefault(require("./computer-data/gigabyte-to-petabyte"));
var terabit_to_bit_1 = __importDefault(require("./computer-data/terabit-to-bit"));
var terabit_to_byte_1 = __importDefault(require("./computer-data/terabit-to-byte"));
var terabit_to_kilobit_1 = __importDefault(require("./computer-data/terabit-to-kilobit"));
var terabit_to_kilobyte_1 = __importDefault(require("./computer-data/terabit-to-kilobyte"));
var terabit_to_megabit_1 = __importDefault(require("./computer-data/terabit-to-megabit"));
var terabit_to_megabyte_1 = __importDefault(require("./computer-data/terabit-to-megabyte"));
var terabit_to_gigabit_1 = __importDefault(require("./computer-data/terabit-to-gigabit"));
var terabit_to_gigabyte_1 = __importDefault(require("./computer-data/terabit-to-gigabyte"));
var terabit_to_terabyte_1 = __importDefault(require("./computer-data/terabit-to-terabyte"));
var terabit_to_petabit_1 = __importDefault(require("./computer-data/terabit-to-petabit"));
var terabit_to_petabyte_1 = __importDefault(require("./computer-data/terabit-to-petabyte"));
var terabyte_to_bit_1 = __importDefault(require("./computer-data/terabyte-to-bit"));
var terabyte_to_byte_1 = __importDefault(require("./computer-data/terabyte-to-byte"));
var terabyte_to_kilobit_1 = __importDefault(require("./computer-data/terabyte-to-kilobit"));
var terabyte_to_kilobyte_1 = __importDefault(require("./computer-data/terabyte-to-kilobyte"));
var terabyte_to_megabit_1 = __importDefault(require("./computer-data/terabyte-to-megabit"));
var terabyte_to_megabyte_1 = __importDefault(require("./computer-data/terabyte-to-megabyte"));
var terabyte_to_gigabit_1 = __importDefault(require("./computer-data/terabyte-to-gigabit"));
var terabyte_to_gigabyte_1 = __importDefault(require("./computer-data/terabyte-to-gigabyte"));
var terabyte_to_terabit_1 = __importDefault(require("./computer-data/terabyte-to-terabit"));
var terabyte_to_petabit_1 = __importDefault(require("./computer-data/terabyte-to-petabit"));
var terabyte_to_petabyte_1 = __importDefault(require("./computer-data/terabyte-to-petabyte"));
var petabit_to_bit_1 = __importDefault(require("./computer-data/petabit-to-bit"));
var petabit_to_byte_1 = __importDefault(require("./computer-data/petabit-to-byte"));
var petabit_to_kilobit_1 = __importDefault(require("./computer-data/petabit-to-kilobit"));
var petabit_to_kilobyte_1 = __importDefault(require("./computer-data/petabit-to-kilobyte"));
var petabit_to_megabit_1 = __importDefault(require("./computer-data/petabit-to-megabit"));
var petabit_to_megabyte_1 = __importDefault(require("./computer-data/petabit-to-megabyte"));
var petabit_to_gigabit_1 = __importDefault(require("./computer-data/petabit-to-gigabit"));
var petabit_to_gigabyte_1 = __importDefault(require("./computer-data/petabit-to-gigabyte"));
var petabit_to_terabit_1 = __importDefault(require("./computer-data/petabit-to-terabit"));
var petabit_to_terabyte_1 = __importDefault(require("./computer-data/petabit-to-terabyte"));
var petabit_to_petabyte_1 = __importDefault(require("./computer-data/petabit-to-petabyte"));
var petabyte_to_bit_1 = __importDefault(require("./computer-data/petabyte-to-bit"));
var petabyte_to_byte_1 = __importDefault(require("./computer-data/petabyte-to-byte"));
var petabyte_to_kilobit_1 = __importDefault(require("./computer-data/petabyte-to-kilobit"));
var petabyte_to_kilobyte_1 = __importDefault(require("./computer-data/petabyte-to-kilobyte"));
var petabyte_to_megabit_1 = __importDefault(require("./computer-data/petabyte-to-megabit"));
var petabyte_to_megabyte_1 = __importDefault(require("./computer-data/petabyte-to-megabyte"));
var petabyte_to_gigabit_1 = __importDefault(require("./computer-data/petabyte-to-gigabit"));
var petabyte_to_gigabyte_1 = __importDefault(require("./computer-data/petabyte-to-gigabyte"));
var petabyte_to_terabit_1 = __importDefault(require("./computer-data/petabyte-to-terabit"));
var petabyte_to_terabyte_1 = __importDefault(require("./computer-data/petabyte-to-terabyte"));
var petabyte_to_petabit_1 = __importDefault(require("./computer-data/petabyte-to-petabit"));
exports["default"] = {
    bitToByte: bit_to_byte_1["default"],
    bitToKilobit: bit_to_kilobit_1["default"],
    bitToKilobyte: bit_to_kilobyte_1["default"],
    bitToMegabit: bit_to_megabit_1["default"],
    bitToMegabyte: bit_to_megabyte_1["default"],
    bitToGigabit: bit_to_gigabit_1["default"],
    bitToGigabyte: bit_to_gigabyte_1["default"],
    bitToTerabit: bit_to_terabit_1["default"],
    bitToTerabyte: bit_to_terabyte_1["default"],
    bitToPetabit: bit_to_petabit_1["default"],
    bitToPetabyte: bit_to_petabyte_1["default"],
    byteToBit: byte_to_bit_1["default"],
    byteToKilobit: byte_to_kilobit_1["default"],
    byteToKilobyte: byte_to_kilobyte_1["default"],
    byteToMegabit: byte_to_megabit_1["default"],
    byteToMegabyte: byte_to_megabyte_1["default"],
    byteToGigabit: byte_to_gigabit_1["default"],
    byteToGigabyte: byte_to_gigabyte_1["default"],
    byteToTerabit: byte_to_terabit_1["default"],
    byteToTerabyte: byte_to_terabyte_1["default"],
    byteToPetabit: byte_to_petabit_1["default"],
    byteToPetabyte: byte_to_petabyte_1["default"],
    kilobitToBit: kilobit_to_bit_1["default"],
    kilobitToByte: kilobit_to_byte_1["default"],
    kilobitToKilobyte: kilobit_to_kilobyte_1["default"],
    kilobitToMegabit: kilobit_to_megabit_1["default"],
    kilobitToMegabyte: kilobit_to_megabyte_1["default"],
    kilobitToGigabit: kilobit_to_gigabit_1["default"],
    kilobitToGigabyte: kilobit_to_gigabyte_1["default"],
    kilobitToTerabit: kilobit_to_terabit_1["default"],
    kilobitToTerabyte: kilobit_to_terabyte_1["default"],
    kilobitToPetabit: kilobit_to_petabit_1["default"],
    kilobitToPetabyte: kilobit_to_petabyte_1["default"],
    kilobyteToBit: kilobyte_to_bit_1["default"],
    kilobyteToByte: kilobyte_to_byte_1["default"],
    kilobyteToKilobit: kilobyte_to_kilobit_1["default"],
    kilobyteToMegabit: kilobyte_to_megabit_1["default"],
    kilobyteToMegabyte: kilobyte_to_megabyte_1["default"],
    kilobyteToGigabit: kilobyte_to_gigabit_1["default"],
    kilobyteToGigabyte: kilobyte_to_gigabyte_1["default"],
    kilobyteToTerabit: kilobyte_to_terabit_1["default"],
    kilobyteToTerabyte: kilobyte_to_terabyte_1["default"],
    kilobyteToPetabit: kilobyte_to_petabit_1["default"],
    kilobyteToPetabyte: kilobyte_to_petabyte_1["default"],
    megabitToBit: megabit_to_bit_1["default"],
    megabitToByte: megabit_to_byte_1["default"],
    megabitToKilobit: megabit_to_kilobit_1["default"],
    megabitToKilobyte: megabit_to_kilobyte_1["default"],
    megabitToMegabyte: megabit_to_megabyte_1["default"],
    megabitToGigabit: megabit_to_gigabit_1["default"],
    megabitToGigabyte: megabit_to_gigabyte_1["default"],
    megabitToTerabit: megabit_to_terabit_1["default"],
    megabitToTerabyte: megabit_to_terabyte_1["default"],
    megabitToPetabit: megabit_to_petabit_1["default"],
    megabitToPetabyte: megabit_to_petabyte_1["default"],
    megabyteToBit: megabyte_to_bit_1["default"],
    megabyteToByte: megabyte_to_byte_1["default"],
    megabyteToKilobit: megabyte_to_kilobit_1["default"],
    megabyteToKilobyte: megabyte_to_kilobyte_1["default"],
    megabyteToMegabit: megabyte_to_megabit_1["default"],
    megabyteToGigabit: megabyte_to_gigabit_1["default"],
    megabyteToGigabyte: megabyte_to_gigabyte_1["default"],
    megabyteToTerabit: megabyte_to_terabit_1["default"],
    megabyteToTerabyte: megabyte_to_terabyte_1["default"],
    megabyteToPetabit: megabyte_to_petabit_1["default"],
    megabyteToPetabyte: megabyte_to_petabyte_1["default"],
    gigabitToBit: gigabit_to_bit_1["default"],
    gigabitToByte: gigabit_to_byte_1["default"],
    gigabitToKilobit: gigabit_to_kilobit_1["default"],
    gigabitToKilobyte: gigabit_to_kilobyte_1["default"],
    gigabitToMegabit: gigabit_to_megabit_1["default"],
    gigabitToMegabyte: gigabit_to_megabyte_1["default"],
    gigabitToGigabyte: gigabit_to_gigabyte_1["default"],
    gigabitToTerabit: gigabit_to_terabit_1["default"],
    gigabitToTerabyte: gigabit_to_terabyte_1["default"],
    gigabitToPetabit: gigabit_to_petabit_1["default"],
    gigabitToPetabyte: gigabit_to_petabyte_1["default"],
    gigabyteToBit: gigabyte_to_bit_1["default"],
    gigabyteToByte: gigabyte_to_byte_1["default"],
    gigabyteToKilobit: gigabyte_to_kilobit_1["default"],
    gigabyteToKilobyte: gigabyte_to_kilobyte_1["default"],
    gigabyteToMegabit: gigabyte_to_megabit_1["default"],
    gigabyteToMegabyte: gigabyte_to_megabyte_1["default"],
    gigabyteToGigabit: gigabyte_to_gigabit_1["default"],
    gigabyteToTerabit: gigabyte_to_terabit_1["default"],
    gigabyteToTerabyte: gigabyte_to_terabyte_1["default"],
    gigabyteToPetabit: gigabyte_to_petabit_1["default"],
    gigabyteToPetabyte: gigabyte_to_petabyte_1["default"],
    terabitToBit: terabit_to_bit_1["default"],
    terabitToByte: terabit_to_byte_1["default"],
    terabitToKilobit: terabit_to_kilobit_1["default"],
    terabitToKilobyte: terabit_to_kilobyte_1["default"],
    terabitToMegabit: terabit_to_megabit_1["default"],
    terabitToMegabyte: terabit_to_megabyte_1["default"],
    terabitToGigabit: terabit_to_gigabit_1["default"],
    terabitToGigabyte: terabit_to_gigabyte_1["default"],
    terabitToTerabyte: terabit_to_terabyte_1["default"],
    terabitToPetabit: terabit_to_petabit_1["default"],
    terabitToPetabyte: terabit_to_petabyte_1["default"],
    terabyteToBit: terabyte_to_bit_1["default"],
    terabyteToByte: terabyte_to_byte_1["default"],
    terabyteToKilobit: terabyte_to_kilobit_1["default"],
    terabyteToKilobyte: terabyte_to_kilobyte_1["default"],
    terabyteToMegabit: terabyte_to_megabit_1["default"],
    terabyteToMegabyte: terabyte_to_megabyte_1["default"],
    terabyteToGigabit: terabyte_to_gigabit_1["default"],
    terabyteToGigabyte: terabyte_to_gigabyte_1["default"],
    terabyteToTerabit: terabyte_to_terabit_1["default"],
    terabyteToPetabit: terabyte_to_petabit_1["default"],
    terabyteToPetabyte: terabyte_to_petabyte_1["default"],
    petabitToBit: petabit_to_bit_1["default"],
    petabitToByte: petabit_to_byte_1["default"],
    petabitToKilobit: petabit_to_kilobit_1["default"],
    petabitToKilobyte: petabit_to_kilobyte_1["default"],
    petabitToMegabit: petabit_to_megabit_1["default"],
    petabitToMegabyte: petabit_to_megabyte_1["default"],
    petabitToGigabit: petabit_to_gigabit_1["default"],
    petabitToGigabyte: petabit_to_gigabyte_1["default"],
    petabitToTerabit: petabit_to_terabit_1["default"],
    petabitToTerabyte: petabit_to_terabyte_1["default"],
    petabitToPetabyte: petabit_to_petabyte_1["default"],
    petabyteToBit: petabyte_to_bit_1["default"],
    petabyteToByte: petabyte_to_byte_1["default"],
    petabyteToKilobit: petabyte_to_kilobit_1["default"],
    petabyteToKilobyte: petabyte_to_kilobyte_1["default"],
    petabyteToMegabit: petabyte_to_megabit_1["default"],
    petabyteToMegabyte: petabyte_to_megabyte_1["default"],
    petabyteToGigabit: petabyte_to_gigabit_1["default"],
    petabyteToGigabyte: petabyte_to_gigabyte_1["default"],
    petabyteToTerabit: petabyte_to_terabit_1["default"],
    petabyteToTerabyte: petabyte_to_terabyte_1["default"],
    petabyteToPetabit: petabyte_to_petabit_1["default"]
};
