'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bitToByte = require('./computer-data/bit-to-byte.js');

var _bitToByte2 = _interopRequireDefault(_bitToByte);

var _bitToKilobit = require('./computer-data/bit-to-kilobit.js');

var _bitToKilobit2 = _interopRequireDefault(_bitToKilobit);

var _bitToKilobyte = require('./computer-data/bit-to-kilobyte.js');

var _bitToKilobyte2 = _interopRequireDefault(_bitToKilobyte);

var _bitToMegabit = require('./computer-data/bit-to-megabit.js');

var _bitToMegabit2 = _interopRequireDefault(_bitToMegabit);

var _bitToMegabyte = require('./computer-data/bit-to-megabyte.js');

var _bitToMegabyte2 = _interopRequireDefault(_bitToMegabyte);

var _bitToGigabit = require('./computer-data/bit-to-gigabit.js');

var _bitToGigabit2 = _interopRequireDefault(_bitToGigabit);

var _bitToGigabyte = require('./computer-data/bit-to-gigabyte.js');

var _bitToGigabyte2 = _interopRequireDefault(_bitToGigabyte);

var _bitToTerabit = require('./computer-data/bit-to-terabit.js');

var _bitToTerabit2 = _interopRequireDefault(_bitToTerabit);

var _bitToTerabyte = require('./computer-data/bit-to-terabyte.js');

var _bitToTerabyte2 = _interopRequireDefault(_bitToTerabyte);

var _bitToPetabit = require('./computer-data/bit-to-petabit.js');

var _bitToPetabit2 = _interopRequireDefault(_bitToPetabit);

var _bitToPetabyte = require('./computer-data/bit-to-petabyte.js');

var _bitToPetabyte2 = _interopRequireDefault(_bitToPetabyte);

var _byteToBit = require('./computer-data/byte-to-bit.js');

var _byteToBit2 = _interopRequireDefault(_byteToBit);

var _byteToKilobit = require('./computer-data/byte-to-kilobit.js');

var _byteToKilobit2 = _interopRequireDefault(_byteToKilobit);

var _byteToKilobyte = require('./computer-data/byte-to-kilobyte.js');

var _byteToKilobyte2 = _interopRequireDefault(_byteToKilobyte);

var _byteToMegabit = require('./computer-data/byte-to-megabit.js');

var _byteToMegabit2 = _interopRequireDefault(_byteToMegabit);

var _byteToMegabyte = require('./computer-data/byte-to-megabyte.js');

var _byteToMegabyte2 = _interopRequireDefault(_byteToMegabyte);

var _byteToGigabit = require('./computer-data/byte-to-gigabit.js');

var _byteToGigabit2 = _interopRequireDefault(_byteToGigabit);

var _byteToGigabyte = require('./computer-data/byte-to-gigabyte.js');

var _byteToGigabyte2 = _interopRequireDefault(_byteToGigabyte);

var _byteToTerabit = require('./computer-data/byte-to-terabit.js');

var _byteToTerabit2 = _interopRequireDefault(_byteToTerabit);

var _byteToTerabyte = require('./computer-data/byte-to-terabyte.js');

var _byteToTerabyte2 = _interopRequireDefault(_byteToTerabyte);

var _byteToPetabit = require('./computer-data/byte-to-petabit.js');

var _byteToPetabit2 = _interopRequireDefault(_byteToPetabit);

var _byteToPetabyte = require('./computer-data/byte-to-petabyte.js');

var _byteToPetabyte2 = _interopRequireDefault(_byteToPetabyte);

var _kilobitToBit = require('./computer-data/kilobit-to-bit.js');

var _kilobitToBit2 = _interopRequireDefault(_kilobitToBit);

var _kilobitToByte = require('./computer-data/kilobit-to-byte.js');

var _kilobitToByte2 = _interopRequireDefault(_kilobitToByte);

var _kilobitToKilobyte = require('./computer-data/kilobit-to-kilobyte.js');

var _kilobitToKilobyte2 = _interopRequireDefault(_kilobitToKilobyte);

var _kilobitToMegabit = require('./computer-data/kilobit-to-megabit.js');

var _kilobitToMegabit2 = _interopRequireDefault(_kilobitToMegabit);

var _kilobitToMegabyte = require('./computer-data/kilobit-to-megabyte.js');

var _kilobitToMegabyte2 = _interopRequireDefault(_kilobitToMegabyte);

var _kilobitToGigabit = require('./computer-data/kilobit-to-gigabit.js');

var _kilobitToGigabit2 = _interopRequireDefault(_kilobitToGigabit);

var _kilobitToGigabyte = require('./computer-data/kilobit-to-gigabyte.js');

var _kilobitToGigabyte2 = _interopRequireDefault(_kilobitToGigabyte);

var _kilobitToTerabit = require('./computer-data/kilobit-to-terabit.js');

var _kilobitToTerabit2 = _interopRequireDefault(_kilobitToTerabit);

var _kilobitToTerabyte = require('./computer-data/kilobit-to-terabyte.js');

var _kilobitToTerabyte2 = _interopRequireDefault(_kilobitToTerabyte);

var _kilobitToPetabit = require('./computer-data/kilobit-to-petabit.js');

var _kilobitToPetabit2 = _interopRequireDefault(_kilobitToPetabit);

var _kilobitToPetabyte = require('./computer-data/kilobit-to-petabyte.js');

var _kilobitToPetabyte2 = _interopRequireDefault(_kilobitToPetabyte);

var _kilobyteToBit = require('./computer-data/kilobyte-to-bit.js');

var _kilobyteToBit2 = _interopRequireDefault(_kilobyteToBit);

var _kilobyteToByte = require('./computer-data/kilobyte-to-byte.js');

var _kilobyteToByte2 = _interopRequireDefault(_kilobyteToByte);

var _kilobyteToKilobit = require('./computer-data/kilobyte-to-kilobit.js');

var _kilobyteToKilobit2 = _interopRequireDefault(_kilobyteToKilobit);

var _kilobyteToMegabit = require('./computer-data/kilobyte-to-megabit.js');

var _kilobyteToMegabit2 = _interopRequireDefault(_kilobyteToMegabit);

var _kilobyteToMegabyte = require('./computer-data/kilobyte-to-megabyte.js');

var _kilobyteToMegabyte2 = _interopRequireDefault(_kilobyteToMegabyte);

var _kilobyteToGigabit = require('./computer-data/kilobyte-to-gigabit.js');

var _kilobyteToGigabit2 = _interopRequireDefault(_kilobyteToGigabit);

var _kilobyteToGigabyte = require('./computer-data/kilobyte-to-gigabyte.js');

var _kilobyteToGigabyte2 = _interopRequireDefault(_kilobyteToGigabyte);

var _kilobyteToTerabit = require('./computer-data/kilobyte-to-terabit.js');

var _kilobyteToTerabit2 = _interopRequireDefault(_kilobyteToTerabit);

var _kilobyteToTerabyte = require('./computer-data/kilobyte-to-terabyte.js');

var _kilobyteToTerabyte2 = _interopRequireDefault(_kilobyteToTerabyte);

var _kilobyteToPetabit = require('./computer-data/kilobyte-to-petabit.js');

var _kilobyteToPetabit2 = _interopRequireDefault(_kilobyteToPetabit);

var _kilobyteToPetabyte = require('./computer-data/kilobyte-to-petabyte.js');

var _kilobyteToPetabyte2 = _interopRequireDefault(_kilobyteToPetabyte);

var _megabitToBit = require('./computer-data/megabit-to-bit.js');

var _megabitToBit2 = _interopRequireDefault(_megabitToBit);

var _megabitToByte = require('./computer-data/megabit-to-byte.js');

var _megabitToByte2 = _interopRequireDefault(_megabitToByte);

var _megabitToKilobit = require('./computer-data/megabit-to-kilobit.js');

var _megabitToKilobit2 = _interopRequireDefault(_megabitToKilobit);

var _megabitToKilobyte = require('./computer-data/megabit-to-kilobyte.js');

var _megabitToKilobyte2 = _interopRequireDefault(_megabitToKilobyte);

var _megabitToMegabyte = require('./computer-data/megabit-to-megabyte.js');

var _megabitToMegabyte2 = _interopRequireDefault(_megabitToMegabyte);

var _megabitToGigabit = require('./computer-data/megabit-to-gigabit.js');

var _megabitToGigabit2 = _interopRequireDefault(_megabitToGigabit);

var _megabitToGigabyte = require('./computer-data/megabit-to-gigabyte.js');

var _megabitToGigabyte2 = _interopRequireDefault(_megabitToGigabyte);

var _megabitToTerabit = require('./computer-data/megabit-to-terabit.js');

var _megabitToTerabit2 = _interopRequireDefault(_megabitToTerabit);

var _megabitToTerabyte = require('./computer-data/megabit-to-terabyte.js');

var _megabitToTerabyte2 = _interopRequireDefault(_megabitToTerabyte);

var _megabitToPetabit = require('./computer-data/megabit-to-petabit.js');

var _megabitToPetabit2 = _interopRequireDefault(_megabitToPetabit);

var _megabitToPetabyte = require('./computer-data/megabit-to-petabyte.js');

var _megabitToPetabyte2 = _interopRequireDefault(_megabitToPetabyte);

var _megabyteToBit = require('./computer-data/megabyte-to-bit.js');

var _megabyteToBit2 = _interopRequireDefault(_megabyteToBit);

var _megabyteToByte = require('./computer-data/megabyte-to-byte.js');

var _megabyteToByte2 = _interopRequireDefault(_megabyteToByte);

var _megabyteToKilobit = require('./computer-data/megabyte-to-kilobit.js');

var _megabyteToKilobit2 = _interopRequireDefault(_megabyteToKilobit);

var _megabyteToKilobyte = require('./computer-data/megabyte-to-kilobyte.js');

var _megabyteToKilobyte2 = _interopRequireDefault(_megabyteToKilobyte);

var _megabyteToMegabit = require('./computer-data/megabyte-to-megabit.js');

var _megabyteToMegabit2 = _interopRequireDefault(_megabyteToMegabit);

var _megabyteToGigabit = require('./computer-data/megabyte-to-gigabit.js');

var _megabyteToGigabit2 = _interopRequireDefault(_megabyteToGigabit);

var _megabyteToGigabyte = require('./computer-data/megabyte-to-gigabyte.js');

var _megabyteToGigabyte2 = _interopRequireDefault(_megabyteToGigabyte);

var _megabyteToTerabit = require('./computer-data/megabyte-to-terabit.js');

var _megabyteToTerabit2 = _interopRequireDefault(_megabyteToTerabit);

var _megabyteToTerabyte = require('./computer-data/megabyte-to-terabyte.js');

var _megabyteToTerabyte2 = _interopRequireDefault(_megabyteToTerabyte);

var _megabyteToPetabit = require('./computer-data/megabyte-to-petabit.js');

var _megabyteToPetabit2 = _interopRequireDefault(_megabyteToPetabit);

var _megabyteToPetabyte = require('./computer-data/megabyte-to-petabyte.js');

var _megabyteToPetabyte2 = _interopRequireDefault(_megabyteToPetabyte);

var _gigabitToBit = require('./computer-data/gigabit-to-bit.js');

var _gigabitToBit2 = _interopRequireDefault(_gigabitToBit);

var _gigabitToByte = require('./computer-data/gigabit-to-byte.js');

var _gigabitToByte2 = _interopRequireDefault(_gigabitToByte);

var _gigabitToKilobit = require('./computer-data/gigabit-to-kilobit.js');

var _gigabitToKilobit2 = _interopRequireDefault(_gigabitToKilobit);

var _gigabitToKilobyte = require('./computer-data/gigabit-to-kilobyte.js');

var _gigabitToKilobyte2 = _interopRequireDefault(_gigabitToKilobyte);

var _gigabitToMegabit = require('./computer-data/gigabit-to-megabit.js');

var _gigabitToMegabit2 = _interopRequireDefault(_gigabitToMegabit);

var _gigabitToMegabyte = require('./computer-data/gigabit-to-megabyte.js');

var _gigabitToMegabyte2 = _interopRequireDefault(_gigabitToMegabyte);

var _gigabitToGigabyte = require('./computer-data/gigabit-to-gigabyte.js');

var _gigabitToGigabyte2 = _interopRequireDefault(_gigabitToGigabyte);

var _gigabitToTerabit = require('./computer-data/gigabit-to-terabit.js');

var _gigabitToTerabit2 = _interopRequireDefault(_gigabitToTerabit);

var _gigabitToTerabyte = require('./computer-data/gigabit-to-terabyte.js');

var _gigabitToTerabyte2 = _interopRequireDefault(_gigabitToTerabyte);

var _gigabitToPetabit = require('./computer-data/gigabit-to-petabit.js');

var _gigabitToPetabit2 = _interopRequireDefault(_gigabitToPetabit);

var _gigabitToPetabyte = require('./computer-data/gigabit-to-petabyte.js');

var _gigabitToPetabyte2 = _interopRequireDefault(_gigabitToPetabyte);

var _gigabyteToBit = require('./computer-data/gigabyte-to-bit.js');

var _gigabyteToBit2 = _interopRequireDefault(_gigabyteToBit);

var _gigabyteToByte = require('./computer-data/gigabyte-to-byte.js');

var _gigabyteToByte2 = _interopRequireDefault(_gigabyteToByte);

var _gigabyteToKilobit = require('./computer-data/gigabyte-to-kilobit.js');

var _gigabyteToKilobit2 = _interopRequireDefault(_gigabyteToKilobit);

var _gigabyteToKilobyte = require('./computer-data/gigabyte-to-kilobyte.js');

var _gigabyteToKilobyte2 = _interopRequireDefault(_gigabyteToKilobyte);

var _gigabyteToMegabit = require('./computer-data/gigabyte-to-megabit.js');

var _gigabyteToMegabit2 = _interopRequireDefault(_gigabyteToMegabit);

var _gigabyteToMegabyte = require('./computer-data/gigabyte-to-megabyte.js');

var _gigabyteToMegabyte2 = _interopRequireDefault(_gigabyteToMegabyte);

var _gigabyteToGigabit = require('./computer-data/gigabyte-to-gigabit.js');

var _gigabyteToGigabit2 = _interopRequireDefault(_gigabyteToGigabit);

var _gigabyteToTerabit = require('./computer-data/gigabyte-to-terabit.js');

var _gigabyteToTerabit2 = _interopRequireDefault(_gigabyteToTerabit);

var _gigabyteToTerabyte = require('./computer-data/gigabyte-to-terabyte.js');

var _gigabyteToTerabyte2 = _interopRequireDefault(_gigabyteToTerabyte);

var _gigabyteToPetabit = require('./computer-data/gigabyte-to-petabit.js');

var _gigabyteToPetabit2 = _interopRequireDefault(_gigabyteToPetabit);

var _gigabyteToPetabyte = require('./computer-data/gigabyte-to-petabyte.js');

var _gigabyteToPetabyte2 = _interopRequireDefault(_gigabyteToPetabyte);

var _terabitToBit = require('./computer-data/terabit-to-bit.js');

var _terabitToBit2 = _interopRequireDefault(_terabitToBit);

var _terabitToByte = require('./computer-data/terabit-to-byte.js');

var _terabitToByte2 = _interopRequireDefault(_terabitToByte);

var _terabitToKilobit = require('./computer-data/terabit-to-kilobit.js');

var _terabitToKilobit2 = _interopRequireDefault(_terabitToKilobit);

var _terabitToKilobyte = require('./computer-data/terabit-to-kilobyte.js');

var _terabitToKilobyte2 = _interopRequireDefault(_terabitToKilobyte);

var _terabitToMegabit = require('./computer-data/terabit-to-megabit.js');

var _terabitToMegabit2 = _interopRequireDefault(_terabitToMegabit);

var _terabitToMegabyte = require('./computer-data/terabit-to-megabyte.js');

var _terabitToMegabyte2 = _interopRequireDefault(_terabitToMegabyte);

var _terabitToGigabit = require('./computer-data/terabit-to-gigabit.js');

var _terabitToGigabit2 = _interopRequireDefault(_terabitToGigabit);

var _terabitToGigabyte = require('./computer-data/terabit-to-gigabyte.js');

var _terabitToGigabyte2 = _interopRequireDefault(_terabitToGigabyte);

var _terabitToTerabyte = require('./computer-data/terabit-to-terabyte.js');

var _terabitToTerabyte2 = _interopRequireDefault(_terabitToTerabyte);

var _terabitToPetabit = require('./computer-data/terabit-to-petabit.js');

var _terabitToPetabit2 = _interopRequireDefault(_terabitToPetabit);

var _terabitToPetabyte = require('./computer-data/terabit-to-petabyte.js');

var _terabitToPetabyte2 = _interopRequireDefault(_terabitToPetabyte);

var _terabyteToBit = require('./computer-data/terabyte-to-bit.js');

var _terabyteToBit2 = _interopRequireDefault(_terabyteToBit);

var _terabyteToByte = require('./computer-data/terabyte-to-byte.js');

var _terabyteToByte2 = _interopRequireDefault(_terabyteToByte);

var _terabyteToKilobit = require('./computer-data/terabyte-to-kilobit.js');

var _terabyteToKilobit2 = _interopRequireDefault(_terabyteToKilobit);

var _terabyteToKilobyte = require('./computer-data/terabyte-to-kilobyte.js');

var _terabyteToKilobyte2 = _interopRequireDefault(_terabyteToKilobyte);

var _terabyteToMegabit = require('./computer-data/terabyte-to-megabit.js');

var _terabyteToMegabit2 = _interopRequireDefault(_terabyteToMegabit);

var _terabyteToMegabyte = require('./computer-data/terabyte-to-megabyte.js');

var _terabyteToMegabyte2 = _interopRequireDefault(_terabyteToMegabyte);

var _terabyteToGigabit = require('./computer-data/terabyte-to-gigabit.js');

var _terabyteToGigabit2 = _interopRequireDefault(_terabyteToGigabit);

var _terabyteToGigabyte = require('./computer-data/terabyte-to-gigabyte.js');

var _terabyteToGigabyte2 = _interopRequireDefault(_terabyteToGigabyte);

var _terabyteToTerabit = require('./computer-data/terabyte-to-terabit.js');

var _terabyteToTerabit2 = _interopRequireDefault(_terabyteToTerabit);

var _terabyteToPetabit = require('./computer-data/terabyte-to-petabit.js');

var _terabyteToPetabit2 = _interopRequireDefault(_terabyteToPetabit);

var _terabyteToPetabyte = require('./computer-data/terabyte-to-petabyte.js');

var _terabyteToPetabyte2 = _interopRequireDefault(_terabyteToPetabyte);

var _petabitToBit = require('./computer-data/petabit-to-bit.js');

var _petabitToBit2 = _interopRequireDefault(_petabitToBit);

var _petabitToByte = require('./computer-data/petabit-to-byte.js');

var _petabitToByte2 = _interopRequireDefault(_petabitToByte);

var _petabitToKilobit = require('./computer-data/petabit-to-kilobit.js');

var _petabitToKilobit2 = _interopRequireDefault(_petabitToKilobit);

var _petabitToKilobyte = require('./computer-data/petabit-to-kilobyte.js');

var _petabitToKilobyte2 = _interopRequireDefault(_petabitToKilobyte);

var _petabitToMegabit = require('./computer-data/petabit-to-megabit.js');

var _petabitToMegabit2 = _interopRequireDefault(_petabitToMegabit);

var _petabitToMegabyte = require('./computer-data/petabit-to-megabyte.js');

var _petabitToMegabyte2 = _interopRequireDefault(_petabitToMegabyte);

var _petabitToGigabit = require('./computer-data/petabit-to-gigabit.js');

var _petabitToGigabit2 = _interopRequireDefault(_petabitToGigabit);

var _petabitToGigabyte = require('./computer-data/petabit-to-gigabyte.js');

var _petabitToGigabyte2 = _interopRequireDefault(_petabitToGigabyte);

var _petabitToTerabit = require('./computer-data/petabit-to-terabit.js');

var _petabitToTerabit2 = _interopRequireDefault(_petabitToTerabit);

var _petabitToTerabyte = require('./computer-data/petabit-to-terabyte.js');

var _petabitToTerabyte2 = _interopRequireDefault(_petabitToTerabyte);

var _petabitToPetabyte = require('./computer-data/petabit-to-petabyte.js');

var _petabitToPetabyte2 = _interopRequireDefault(_petabitToPetabyte);

var _petabyteToBit = require('./computer-data/petabyte-to-bit.js');

var _petabyteToBit2 = _interopRequireDefault(_petabyteToBit);

var _petabyteToByte = require('./computer-data/petabyte-to-byte.js');

var _petabyteToByte2 = _interopRequireDefault(_petabyteToByte);

var _petabyteToKilobit = require('./computer-data/petabyte-to-kilobit.js');

var _petabyteToKilobit2 = _interopRequireDefault(_petabyteToKilobit);

var _petabyteToKilobyte = require('./computer-data/petabyte-to-kilobyte.js');

var _petabyteToKilobyte2 = _interopRequireDefault(_petabyteToKilobyte);

var _petabyteToMegabit = require('./computer-data/petabyte-to-megabit.js');

var _petabyteToMegabit2 = _interopRequireDefault(_petabyteToMegabit);

var _petabyteToMegabyte = require('./computer-data/petabyte-to-megabyte.js');

var _petabyteToMegabyte2 = _interopRequireDefault(_petabyteToMegabyte);

var _petabyteToGigabit = require('./computer-data/petabyte-to-gigabit.js');

var _petabyteToGigabit2 = _interopRequireDefault(_petabyteToGigabit);

var _petabyteToGigabyte = require('./computer-data/petabyte-to-gigabyte.js');

var _petabyteToGigabyte2 = _interopRequireDefault(_petabyteToGigabyte);

var _petabyteToTerabit = require('./computer-data/petabyte-to-terabit.js');

var _petabyteToTerabit2 = _interopRequireDefault(_petabyteToTerabit);

var _petabyteToTerabyte = require('./computer-data/petabyte-to-terabyte.js');

var _petabyteToTerabyte2 = _interopRequireDefault(_petabyteToTerabyte);

var _petabyteToPetabit = require('./computer-data/petabyte-to-petabit.js');

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