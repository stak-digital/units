'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bitToByte = require('./computerData/bit-to-byte.js');

var _bitToByte2 = _interopRequireDefault(_bitToByte);

var _bitToKilobit = require('./computerData/bit-to-kilobit.js');

var _bitToKilobit2 = _interopRequireDefault(_bitToKilobit);

var _bitToKilobyte = require('./computerData/bit-to-kilobyte.js');

var _bitToKilobyte2 = _interopRequireDefault(_bitToKilobyte);

var _bitToMegabit = require('./computerData/bit-to-megabit.js');

var _bitToMegabit2 = _interopRequireDefault(_bitToMegabit);

var _bitToMegabyte = require('./computerData/bit-to-megabyte.js');

var _bitToMegabyte2 = _interopRequireDefault(_bitToMegabyte);

var _bitToGigabit = require('./computerData/bit-to-gigabit.js');

var _bitToGigabit2 = _interopRequireDefault(_bitToGigabit);

var _bitToGigabyte = require('./computerData/bit-to-gigabyte.js');

var _bitToGigabyte2 = _interopRequireDefault(_bitToGigabyte);

var _bitToTerabit = require('./computerData/bit-to-terabit.js');

var _bitToTerabit2 = _interopRequireDefault(_bitToTerabit);

var _bitToTerabyte = require('./computerData/bit-to-terabyte.js');

var _bitToTerabyte2 = _interopRequireDefault(_bitToTerabyte);

var _bitToPetabit = require('./computerData/bit-to-petabit.js');

var _bitToPetabit2 = _interopRequireDefault(_bitToPetabit);

var _bitToPetabyte = require('./computerData/bit-to-petabyte.js');

var _bitToPetabyte2 = _interopRequireDefault(_bitToPetabyte);

var _byteToBit = require('./computerData/byte-to-bit.js');

var _byteToBit2 = _interopRequireDefault(_byteToBit);

var _byteToKilobit = require('./computerData/byte-to-kilobit.js');

var _byteToKilobit2 = _interopRequireDefault(_byteToKilobit);

var _byteToKilobyte = require('./computerData/byte-to-kilobyte.js');

var _byteToKilobyte2 = _interopRequireDefault(_byteToKilobyte);

var _byteToMegabit = require('./computerData/byte-to-megabit.js');

var _byteToMegabit2 = _interopRequireDefault(_byteToMegabit);

var _byteToMegabyte = require('./computerData/byte-to-megabyte.js');

var _byteToMegabyte2 = _interopRequireDefault(_byteToMegabyte);

var _byteToGigabit = require('./computerData/byte-to-gigabit.js');

var _byteToGigabit2 = _interopRequireDefault(_byteToGigabit);

var _byteToGigabyte = require('./computerData/byte-to-gigabyte.js');

var _byteToGigabyte2 = _interopRequireDefault(_byteToGigabyte);

var _byteToTerabit = require('./computerData/byte-to-terabit.js');

var _byteToTerabit2 = _interopRequireDefault(_byteToTerabit);

var _byteToTerabyte = require('./computerData/byte-to-terabyte.js');

var _byteToTerabyte2 = _interopRequireDefault(_byteToTerabyte);

var _byteToPetabit = require('./computerData/byte-to-petabit.js');

var _byteToPetabit2 = _interopRequireDefault(_byteToPetabit);

var _byteToPetabyte = require('./computerData/byte-to-petabyte.js');

var _byteToPetabyte2 = _interopRequireDefault(_byteToPetabyte);

var _kilobitToBit = require('./computerData/kilobit-to-bit.js');

var _kilobitToBit2 = _interopRequireDefault(_kilobitToBit);

var _kilobitToByte = require('./computerData/kilobit-to-byte.js');

var _kilobitToByte2 = _interopRequireDefault(_kilobitToByte);

var _kilobitToKilobyte = require('./computerData/kilobit-to-kilobyte.js');

var _kilobitToKilobyte2 = _interopRequireDefault(_kilobitToKilobyte);

var _kilobitToMegabit = require('./computerData/kilobit-to-megabit.js');

var _kilobitToMegabit2 = _interopRequireDefault(_kilobitToMegabit);

var _kilobitToMegabyte = require('./computerData/kilobit-to-megabyte.js');

var _kilobitToMegabyte2 = _interopRequireDefault(_kilobitToMegabyte);

var _kilobitToGigabit = require('./computerData/kilobit-to-gigabit.js');

var _kilobitToGigabit2 = _interopRequireDefault(_kilobitToGigabit);

var _kilobitToGigabyte = require('./computerData/kilobit-to-gigabyte.js');

var _kilobitToGigabyte2 = _interopRequireDefault(_kilobitToGigabyte);

var _kilobitToTerabit = require('./computerData/kilobit-to-terabit.js');

var _kilobitToTerabit2 = _interopRequireDefault(_kilobitToTerabit);

var _kilobitToTerabyte = require('./computerData/kilobit-to-terabyte.js');

var _kilobitToTerabyte2 = _interopRequireDefault(_kilobitToTerabyte);

var _kilobitToPetabit = require('./computerData/kilobit-to-petabit.js');

var _kilobitToPetabit2 = _interopRequireDefault(_kilobitToPetabit);

var _kilobitToPetabyte = require('./computerData/kilobit-to-petabyte.js');

var _kilobitToPetabyte2 = _interopRequireDefault(_kilobitToPetabyte);

var _kilobyteToBit = require('./computerData/kilobyte-to-bit.js');

var _kilobyteToBit2 = _interopRequireDefault(_kilobyteToBit);

var _kilobyteToByte = require('./computerData/kilobyte-to-byte.js');

var _kilobyteToByte2 = _interopRequireDefault(_kilobyteToByte);

var _kilobyteToKilobit = require('./computerData/kilobyte-to-kilobit.js');

var _kilobyteToKilobit2 = _interopRequireDefault(_kilobyteToKilobit);

var _kilobyteToMegabit = require('./computerData/kilobyte-to-megabit.js');

var _kilobyteToMegabit2 = _interopRequireDefault(_kilobyteToMegabit);

var _kilobyteToMegabyte = require('./computerData/kilobyte-to-megabyte.js');

var _kilobyteToMegabyte2 = _interopRequireDefault(_kilobyteToMegabyte);

var _kilobyteToGigabit = require('./computerData/kilobyte-to-gigabit.js');

var _kilobyteToGigabit2 = _interopRequireDefault(_kilobyteToGigabit);

var _kilobyteToGigabyte = require('./computerData/kilobyte-to-gigabyte.js');

var _kilobyteToGigabyte2 = _interopRequireDefault(_kilobyteToGigabyte);

var _kilobyteToTerabit = require('./computerData/kilobyte-to-terabit.js');

var _kilobyteToTerabit2 = _interopRequireDefault(_kilobyteToTerabit);

var _kilobyteToTerabyte = require('./computerData/kilobyte-to-terabyte.js');

var _kilobyteToTerabyte2 = _interopRequireDefault(_kilobyteToTerabyte);

var _kilobyteToPetabit = require('./computerData/kilobyte-to-petabit.js');

var _kilobyteToPetabit2 = _interopRequireDefault(_kilobyteToPetabit);

var _kilobyteToPetabyte = require('./computerData/kilobyte-to-petabyte.js');

var _kilobyteToPetabyte2 = _interopRequireDefault(_kilobyteToPetabyte);

var _megabitToBit = require('./computerData/megabit-to-bit.js');

var _megabitToBit2 = _interopRequireDefault(_megabitToBit);

var _megabitToByte = require('./computerData/megabit-to-byte.js');

var _megabitToByte2 = _interopRequireDefault(_megabitToByte);

var _megabitToKilobit = require('./computerData/megabit-to-kilobit.js');

var _megabitToKilobit2 = _interopRequireDefault(_megabitToKilobit);

var _megabitToKilobyte = require('./computerData/megabit-to-kilobyte.js');

var _megabitToKilobyte2 = _interopRequireDefault(_megabitToKilobyte);

var _megabitToMegabyte = require('./computerData/megabit-to-megabyte.js');

var _megabitToMegabyte2 = _interopRequireDefault(_megabitToMegabyte);

var _megabitToGigabit = require('./computerData/megabit-to-gigabit.js');

var _megabitToGigabit2 = _interopRequireDefault(_megabitToGigabit);

var _megabitToGigabyte = require('./computerData/megabit-to-gigabyte.js');

var _megabitToGigabyte2 = _interopRequireDefault(_megabitToGigabyte);

var _megabitToTerabit = require('./computerData/megabit-to-terabit.js');

var _megabitToTerabit2 = _interopRequireDefault(_megabitToTerabit);

var _megabitToTerabyte = require('./computerData/megabit-to-terabyte.js');

var _megabitToTerabyte2 = _interopRequireDefault(_megabitToTerabyte);

var _megabitToPetabit = require('./computerData/megabit-to-petabit.js');

var _megabitToPetabit2 = _interopRequireDefault(_megabitToPetabit);

var _megabitToPetabyte = require('./computerData/megabit-to-petabyte.js');

var _megabitToPetabyte2 = _interopRequireDefault(_megabitToPetabyte);

var _megabyteToBit = require('./computerData/megabyte-to-bit.js');

var _megabyteToBit2 = _interopRequireDefault(_megabyteToBit);

var _megabyteToByte = require('./computerData/megabyte-to-byte.js');

var _megabyteToByte2 = _interopRequireDefault(_megabyteToByte);

var _megabyteToKilobit = require('./computerData/megabyte-to-kilobit.js');

var _megabyteToKilobit2 = _interopRequireDefault(_megabyteToKilobit);

var _megabyteToKilobyte = require('./computerData/megabyte-to-kilobyte.js');

var _megabyteToKilobyte2 = _interopRequireDefault(_megabyteToKilobyte);

var _megabyteToMegabit = require('./computerData/megabyte-to-megabit.js');

var _megabyteToMegabit2 = _interopRequireDefault(_megabyteToMegabit);

var _megabyteToGigabit = require('./computerData/megabyte-to-gigabit.js');

var _megabyteToGigabit2 = _interopRequireDefault(_megabyteToGigabit);

var _megabyteToGigabyte = require('./computerData/megabyte-to-gigabyte.js');

var _megabyteToGigabyte2 = _interopRequireDefault(_megabyteToGigabyte);

var _megabyteToTerabit = require('./computerData/megabyte-to-terabit.js');

var _megabyteToTerabit2 = _interopRequireDefault(_megabyteToTerabit);

var _megabyteToTerabyte = require('./computerData/megabyte-to-terabyte.js');

var _megabyteToTerabyte2 = _interopRequireDefault(_megabyteToTerabyte);

var _megabyteToPetabit = require('./computerData/megabyte-to-petabit.js');

var _megabyteToPetabit2 = _interopRequireDefault(_megabyteToPetabit);

var _megabyteToPetabyte = require('./computerData/megabyte-to-petabyte.js');

var _megabyteToPetabyte2 = _interopRequireDefault(_megabyteToPetabyte);

var _gigabitToBit = require('./computerData/gigabit-to-bit.js');

var _gigabitToBit2 = _interopRequireDefault(_gigabitToBit);

var _gigabitToByte = require('./computerData/gigabit-to-byte.js');

var _gigabitToByte2 = _interopRequireDefault(_gigabitToByte);

var _gigabitToKilobit = require('./computerData/gigabit-to-kilobit.js');

var _gigabitToKilobit2 = _interopRequireDefault(_gigabitToKilobit);

var _gigabitToKilobyte = require('./computerData/gigabit-to-kilobyte.js');

var _gigabitToKilobyte2 = _interopRequireDefault(_gigabitToKilobyte);

var _gigabitToMegabit = require('./computerData/gigabit-to-megabit.js');

var _gigabitToMegabit2 = _interopRequireDefault(_gigabitToMegabit);

var _gigabitToMegabyte = require('./computerData/gigabit-to-megabyte.js');

var _gigabitToMegabyte2 = _interopRequireDefault(_gigabitToMegabyte);

var _gigabitToGigabyte = require('./computerData/gigabit-to-gigabyte.js');

var _gigabitToGigabyte2 = _interopRequireDefault(_gigabitToGigabyte);

var _gigabitToTerabit = require('./computerData/gigabit-to-terabit.js');

var _gigabitToTerabit2 = _interopRequireDefault(_gigabitToTerabit);

var _gigabitToTerabyte = require('./computerData/gigabit-to-terabyte.js');

var _gigabitToTerabyte2 = _interopRequireDefault(_gigabitToTerabyte);

var _gigabitToPetabit = require('./computerData/gigabit-to-petabit.js');

var _gigabitToPetabit2 = _interopRequireDefault(_gigabitToPetabit);

var _gigabitToPetabyte = require('./computerData/gigabit-to-petabyte.js');

var _gigabitToPetabyte2 = _interopRequireDefault(_gigabitToPetabyte);

var _gigabyteToBit = require('./computerData/gigabyte-to-bit.js');

var _gigabyteToBit2 = _interopRequireDefault(_gigabyteToBit);

var _gigabyteToByte = require('./computerData/gigabyte-to-byte.js');

var _gigabyteToByte2 = _interopRequireDefault(_gigabyteToByte);

var _gigabyteToKilobit = require('./computerData/gigabyte-to-kilobit.js');

var _gigabyteToKilobit2 = _interopRequireDefault(_gigabyteToKilobit);

var _gigabyteToKilobyte = require('./computerData/gigabyte-to-kilobyte.js');

var _gigabyteToKilobyte2 = _interopRequireDefault(_gigabyteToKilobyte);

var _gigabyteToMegabit = require('./computerData/gigabyte-to-megabit.js');

var _gigabyteToMegabit2 = _interopRequireDefault(_gigabyteToMegabit);

var _gigabyteToMegabyte = require('./computerData/gigabyte-to-megabyte.js');

var _gigabyteToMegabyte2 = _interopRequireDefault(_gigabyteToMegabyte);

var _gigabyteToGigabit = require('./computerData/gigabyte-to-gigabit.js');

var _gigabyteToGigabit2 = _interopRequireDefault(_gigabyteToGigabit);

var _gigabyteToTerabit = require('./computerData/gigabyte-to-terabit.js');

var _gigabyteToTerabit2 = _interopRequireDefault(_gigabyteToTerabit);

var _gigabyteToTerabyte = require('./computerData/gigabyte-to-terabyte.js');

var _gigabyteToTerabyte2 = _interopRequireDefault(_gigabyteToTerabyte);

var _gigabyteToPetabit = require('./computerData/gigabyte-to-petabit.js');

var _gigabyteToPetabit2 = _interopRequireDefault(_gigabyteToPetabit);

var _gigabyteToPetabyte = require('./computerData/gigabyte-to-petabyte.js');

var _gigabyteToPetabyte2 = _interopRequireDefault(_gigabyteToPetabyte);

var _terabitToBit = require('./computerData/terabit-to-bit.js');

var _terabitToBit2 = _interopRequireDefault(_terabitToBit);

var _terabitToByte = require('./computerData/terabit-to-byte.js');

var _terabitToByte2 = _interopRequireDefault(_terabitToByte);

var _terabitToKilobit = require('./computerData/terabit-to-kilobit.js');

var _terabitToKilobit2 = _interopRequireDefault(_terabitToKilobit);

var _terabitToKilobyte = require('./computerData/terabit-to-kilobyte.js');

var _terabitToKilobyte2 = _interopRequireDefault(_terabitToKilobyte);

var _terabitToMegabit = require('./computerData/terabit-to-megabit.js');

var _terabitToMegabit2 = _interopRequireDefault(_terabitToMegabit);

var _terabitToMegabyte = require('./computerData/terabit-to-megabyte.js');

var _terabitToMegabyte2 = _interopRequireDefault(_terabitToMegabyte);

var _terabitToGigabit = require('./computerData/terabit-to-gigabit.js');

var _terabitToGigabit2 = _interopRequireDefault(_terabitToGigabit);

var _terabitToGigabyte = require('./computerData/terabit-to-gigabyte.js');

var _terabitToGigabyte2 = _interopRequireDefault(_terabitToGigabyte);

var _terabitToTerabyte = require('./computerData/terabit-to-terabyte.js');

var _terabitToTerabyte2 = _interopRequireDefault(_terabitToTerabyte);

var _terabitToPetabit = require('./computerData/terabit-to-petabit.js');

var _terabitToPetabit2 = _interopRequireDefault(_terabitToPetabit);

var _terabitToPetabyte = require('./computerData/terabit-to-petabyte.js');

var _terabitToPetabyte2 = _interopRequireDefault(_terabitToPetabyte);

var _terabyteToBit = require('./computerData/terabyte-to-bit.js');

var _terabyteToBit2 = _interopRequireDefault(_terabyteToBit);

var _terabyteToByte = require('./computerData/terabyte-to-byte.js');

var _terabyteToByte2 = _interopRequireDefault(_terabyteToByte);

var _terabyteToKilobit = require('./computerData/terabyte-to-kilobit.js');

var _terabyteToKilobit2 = _interopRequireDefault(_terabyteToKilobit);

var _terabyteToKilobyte = require('./computerData/terabyte-to-kilobyte.js');

var _terabyteToKilobyte2 = _interopRequireDefault(_terabyteToKilobyte);

var _terabyteToMegabit = require('./computerData/terabyte-to-megabit.js');

var _terabyteToMegabit2 = _interopRequireDefault(_terabyteToMegabit);

var _terabyteToMegabyte = require('./computerData/terabyte-to-megabyte.js');

var _terabyteToMegabyte2 = _interopRequireDefault(_terabyteToMegabyte);

var _terabyteToGigabit = require('./computerData/terabyte-to-gigabit.js');

var _terabyteToGigabit2 = _interopRequireDefault(_terabyteToGigabit);

var _terabyteToGigabyte = require('./computerData/terabyte-to-gigabyte.js');

var _terabyteToGigabyte2 = _interopRequireDefault(_terabyteToGigabyte);

var _terabyteToTerabit = require('./computerData/terabyte-to-terabit.js');

var _terabyteToTerabit2 = _interopRequireDefault(_terabyteToTerabit);

var _terabyteToPetabit = require('./computerData/terabyte-to-petabit.js');

var _terabyteToPetabit2 = _interopRequireDefault(_terabyteToPetabit);

var _terabyteToPetabyte = require('./computerData/terabyte-to-petabyte.js');

var _terabyteToPetabyte2 = _interopRequireDefault(_terabyteToPetabyte);

var _petabitToBit = require('./computerData/petabit-to-bit.js');

var _petabitToBit2 = _interopRequireDefault(_petabitToBit);

var _petabitToByte = require('./computerData/petabit-to-byte.js');

var _petabitToByte2 = _interopRequireDefault(_petabitToByte);

var _petabitToKilobit = require('./computerData/petabit-to-kilobit.js');

var _petabitToKilobit2 = _interopRequireDefault(_petabitToKilobit);

var _petabitToKilobyte = require('./computerData/petabit-to-kilobyte.js');

var _petabitToKilobyte2 = _interopRequireDefault(_petabitToKilobyte);

var _petabitToMegabit = require('./computerData/petabit-to-megabit.js');

var _petabitToMegabit2 = _interopRequireDefault(_petabitToMegabit);

var _petabitToMegabyte = require('./computerData/petabit-to-megabyte.js');

var _petabitToMegabyte2 = _interopRequireDefault(_petabitToMegabyte);

var _petabitToGigabit = require('./computerData/petabit-to-gigabit.js');

var _petabitToGigabit2 = _interopRequireDefault(_petabitToGigabit);

var _petabitToGigabyte = require('./computerData/petabit-to-gigabyte.js');

var _petabitToGigabyte2 = _interopRequireDefault(_petabitToGigabyte);

var _petabitToTerabit = require('./computerData/petabit-to-terabit.js');

var _petabitToTerabit2 = _interopRequireDefault(_petabitToTerabit);

var _petabitToTerabyte = require('./computerData/petabit-to-terabyte.js');

var _petabitToTerabyte2 = _interopRequireDefault(_petabitToTerabyte);

var _petabitToPetabyte = require('./computerData/petabit-to-petabyte.js');

var _petabitToPetabyte2 = _interopRequireDefault(_petabitToPetabyte);

var _petabyteToBit = require('./computerData/petabyte-to-bit.js');

var _petabyteToBit2 = _interopRequireDefault(_petabyteToBit);

var _petabyteToByte = require('./computerData/petabyte-to-byte.js');

var _petabyteToByte2 = _interopRequireDefault(_petabyteToByte);

var _petabyteToKilobit = require('./computerData/petabyte-to-kilobit.js');

var _petabyteToKilobit2 = _interopRequireDefault(_petabyteToKilobit);

var _petabyteToKilobyte = require('./computerData/petabyte-to-kilobyte.js');

var _petabyteToKilobyte2 = _interopRequireDefault(_petabyteToKilobyte);

var _petabyteToMegabit = require('./computerData/petabyte-to-megabit.js');

var _petabyteToMegabit2 = _interopRequireDefault(_petabyteToMegabit);

var _petabyteToMegabyte = require('./computerData/petabyte-to-megabyte.js');

var _petabyteToMegabyte2 = _interopRequireDefault(_petabyteToMegabyte);

var _petabyteToGigabit = require('./computerData/petabyte-to-gigabit.js');

var _petabyteToGigabit2 = _interopRequireDefault(_petabyteToGigabit);

var _petabyteToGigabyte = require('./computerData/petabyte-to-gigabyte.js');

var _petabyteToGigabyte2 = _interopRequireDefault(_petabyteToGigabyte);

var _petabyteToTerabit = require('./computerData/petabyte-to-terabit.js');

var _petabyteToTerabit2 = _interopRequireDefault(_petabyteToTerabit);

var _petabyteToTerabyte = require('./computerData/petabyte-to-terabyte.js');

var _petabyteToTerabyte2 = _interopRequireDefault(_petabyteToTerabyte);

var _petabyteToPetabit = require('./computerData/petabyte-to-petabit.js');

var _petabyteToPetabit2 = _interopRequireDefault(_petabyteToPetabit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	bitToByte: _bitToByte2.default,
	bitToKilobit: _bitToKilobit2.default,
	bitToKilobyte: _bitToKilobyte2.default,
	bitToMegabit: _bitToMegabit2.default,
	bitToMegabyte: _bitToMegabyte2.default,
	bitToGigabit: _bitToGigabit2.default,
	bitToGigabyte: _bitToGigabyte2.default,
	bitToTerabit: _bitToTerabit2.default,
	bitToTerabyte: _bitToTerabyte2.default,
	bitToPetabit: _bitToPetabit2.default,
	bitToPetabyte: _bitToPetabyte2.default,
	byteToBit: _byteToBit2.default,
	byteToKilobit: _byteToKilobit2.default,
	byteToKilobyte: _byteToKilobyte2.default,
	byteToMegabit: _byteToMegabit2.default,
	byteToMegabyte: _byteToMegabyte2.default,
	byteToGigabit: _byteToGigabit2.default,
	byteToGigabyte: _byteToGigabyte2.default,
	byteToTerabit: _byteToTerabit2.default,
	byteToTerabyte: _byteToTerabyte2.default,
	byteToPetabit: _byteToPetabit2.default,
	byteToPetabyte: _byteToPetabyte2.default,
	kilobitToBit: _kilobitToBit2.default,
	kilobitToByte: _kilobitToByte2.default,
	kilobitToKilobyte: _kilobitToKilobyte2.default,
	kilobitToMegabit: _kilobitToMegabit2.default,
	kilobitToMegabyte: _kilobitToMegabyte2.default,
	kilobitToGigabit: _kilobitToGigabit2.default,
	kilobitToGigabyte: _kilobitToGigabyte2.default,
	kilobitToTerabit: _kilobitToTerabit2.default,
	kilobitToTerabyte: _kilobitToTerabyte2.default,
	kilobitToPetabit: _kilobitToPetabit2.default,
	kilobitToPetabyte: _kilobitToPetabyte2.default,
	kilobyteToBit: _kilobyteToBit2.default,
	kilobyteToByte: _kilobyteToByte2.default,
	kilobyteToKilobit: _kilobyteToKilobit2.default,
	kilobyteToMegabit: _kilobyteToMegabit2.default,
	kilobyteToMegabyte: _kilobyteToMegabyte2.default,
	kilobyteToGigabit: _kilobyteToGigabit2.default,
	kilobyteToGigabyte: _kilobyteToGigabyte2.default,
	kilobyteToTerabit: _kilobyteToTerabit2.default,
	kilobyteToTerabyte: _kilobyteToTerabyte2.default,
	kilobyteToPetabit: _kilobyteToPetabit2.default,
	kilobyteToPetabyte: _kilobyteToPetabyte2.default,
	megabitToBit: _megabitToBit2.default,
	megabitToByte: _megabitToByte2.default,
	megabitToKilobit: _megabitToKilobit2.default,
	megabitToKilobyte: _megabitToKilobyte2.default,
	megabitToMegabyte: _megabitToMegabyte2.default,
	megabitToGigabit: _megabitToGigabit2.default,
	megabitToGigabyte: _megabitToGigabyte2.default,
	megabitToTerabit: _megabitToTerabit2.default,
	megabitToTerabyte: _megabitToTerabyte2.default,
	megabitToPetabit: _megabitToPetabit2.default,
	megabitToPetabyte: _megabitToPetabyte2.default,
	megabyteToBit: _megabyteToBit2.default,
	megabyteToByte: _megabyteToByte2.default,
	megabyteToKilobit: _megabyteToKilobit2.default,
	megabyteToKilobyte: _megabyteToKilobyte2.default,
	megabyteToMegabit: _megabyteToMegabit2.default,
	megabyteToGigabit: _megabyteToGigabit2.default,
	megabyteToGigabyte: _megabyteToGigabyte2.default,
	megabyteToTerabit: _megabyteToTerabit2.default,
	megabyteToTerabyte: _megabyteToTerabyte2.default,
	megabyteToPetabit: _megabyteToPetabit2.default,
	megabyteToPetabyte: _megabyteToPetabyte2.default,
	gigabitToBit: _gigabitToBit2.default,
	gigabitToByte: _gigabitToByte2.default,
	gigabitToKilobit: _gigabitToKilobit2.default,
	gigabitToKilobyte: _gigabitToKilobyte2.default,
	gigabitToMegabit: _gigabitToMegabit2.default,
	gigabitToMegabyte: _gigabitToMegabyte2.default,
	gigabitToGigabyte: _gigabitToGigabyte2.default,
	gigabitToTerabit: _gigabitToTerabit2.default,
	gigabitToTerabyte: _gigabitToTerabyte2.default,
	gigabitToPetabit: _gigabitToPetabit2.default,
	gigabitToPetabyte: _gigabitToPetabyte2.default,
	gigabyteToBit: _gigabyteToBit2.default,
	gigabyteToByte: _gigabyteToByte2.default,
	gigabyteToKilobit: _gigabyteToKilobit2.default,
	gigabyteToKilobyte: _gigabyteToKilobyte2.default,
	gigabyteToMegabit: _gigabyteToMegabit2.default,
	gigabyteToMegabyte: _gigabyteToMegabyte2.default,
	gigabyteToGigabit: _gigabyteToGigabit2.default,
	gigabyteToTerabit: _gigabyteToTerabit2.default,
	gigabyteToTerabyte: _gigabyteToTerabyte2.default,
	gigabyteToPetabit: _gigabyteToPetabit2.default,
	gigabyteToPetabyte: _gigabyteToPetabyte2.default,
	terabitToBit: _terabitToBit2.default,
	terabitToByte: _terabitToByte2.default,
	terabitToKilobit: _terabitToKilobit2.default,
	terabitToKilobyte: _terabitToKilobyte2.default,
	terabitToMegabit: _terabitToMegabit2.default,
	terabitToMegabyte: _terabitToMegabyte2.default,
	terabitToGigabit: _terabitToGigabit2.default,
	terabitToGigabyte: _terabitToGigabyte2.default,
	terabitToTerabyte: _terabitToTerabyte2.default,
	terabitToPetabit: _terabitToPetabit2.default,
	terabitToPetabyte: _terabitToPetabyte2.default,
	terabyteToBit: _terabyteToBit2.default,
	terabyteToByte: _terabyteToByte2.default,
	terabyteToKilobit: _terabyteToKilobit2.default,
	terabyteToKilobyte: _terabyteToKilobyte2.default,
	terabyteToMegabit: _terabyteToMegabit2.default,
	terabyteToMegabyte: _terabyteToMegabyte2.default,
	terabyteToGigabit: _terabyteToGigabit2.default,
	terabyteToGigabyte: _terabyteToGigabyte2.default,
	terabyteToTerabit: _terabyteToTerabit2.default,
	terabyteToPetabit: _terabyteToPetabit2.default,
	terabyteToPetabyte: _terabyteToPetabyte2.default,
	petabitToBit: _petabitToBit2.default,
	petabitToByte: _petabitToByte2.default,
	petabitToKilobit: _petabitToKilobit2.default,
	petabitToKilobyte: _petabitToKilobyte2.default,
	petabitToMegabit: _petabitToMegabit2.default,
	petabitToMegabyte: _petabitToMegabyte2.default,
	petabitToGigabit: _petabitToGigabit2.default,
	petabitToGigabyte: _petabitToGigabyte2.default,
	petabitToTerabit: _petabitToTerabit2.default,
	petabitToTerabyte: _petabitToTerabyte2.default,
	petabitToPetabyte: _petabitToPetabyte2.default,
	petabyteToBit: _petabyteToBit2.default,
	petabyteToByte: _petabyteToByte2.default,
	petabyteToKilobit: _petabyteToKilobit2.default,
	petabyteToKilobyte: _petabyteToKilobyte2.default,
	petabyteToMegabit: _petabyteToMegabit2.default,
	petabyteToMegabyte: _petabyteToMegabyte2.default,
	petabyteToGigabit: _petabyteToGigabit2.default,
	petabyteToGigabyte: _petabyteToGigabyte2.default,
	petabyteToTerabit: _petabyteToTerabit2.default,
	petabyteToTerabyte: _petabyteToTerabyte2.default,
	petabyteToPetabit: _petabyteToPetabit2.default
};