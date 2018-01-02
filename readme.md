# Units

[![Build Status](https://travis-ci.org/stak-digital/units.svg?branch=master)](https://travis-ci.org/stak-digital/units)
[![codecov](https://codecov.io/gh/stak-digital/units/branch/master/graph/badge.svg)](https://codecov.io/gh/stak-digital/units)

A highly modular unit conversion library.

The library is split into three tiers:

- Library (index.js)
- Conversion category (weight.js, length.js)
- Individual function (poundsToKilograms.js)

## Usage

### Library Version

```javascript
import units from '@stak-digital/units';

const amountInPounds = 60;
const amountInKilograms = units.poundsToKilograms(amountInPounds);
    // 27.2155
     
const amountInInches = 30;
const amountInMeters = units.inchesToMeters(amountInInches);
    // 0.762
```

### Category Version

```javascript
import convertWeight from '@stak-digital/units/weight';
import convertLength from '@stak-digital/units/length';

const amountInPounds = 60;
const amountInKilograms = convertWeight.poundsToKilograms(amountInPounds);
    // 27.2155
     
const amountInInches = 30;
const amountInMeters = convertLength.inchesToMeters(amountInInches);
    // 0.762
```

### Individual Functions

```javascript
import poundsToKilograms from '@stak-digital/units/pounds-to-kilograms';
import inchesToMeters from '@stak-digital/units/inches-to-meters';

const amountInPounds = 60;
const amountInKilograms = poundsToKilograms(amountInPounds);
    // 27.2155
     
const amountInInches = 30;
const amountInMeters = inchesToMeters(amountInInches);
    // 0.762
```

For full API docs, visit [https://units.js.org](https://units.js.org)

## Roadmap

## Area Category
- [ ] Square Metres
- [ ] Acres
- [ ] Hectares
- [ ] Are
- [ ] Cuerda
- [ ] Square Yard
- [ ] Square Foot
- [ ] Square Inch

## Temperature Category

- [ ] Kelvin
- [ ] Celsius
- [ ] Fahrenheit

## Computer Data 
- [ ] bit
- [ ] byte
- [ ] kilobit
- [ ] kibibit
- [ ] kilobyte
- [ ] kibibyte
- [ ] megabit
- [ ] mebibit
- [ ] megabyte
- [ ] mebibyte
- [ ] gigabit
- [ ] gibibit
- [ ] gigabyte
- [ ] gibibyte
- [ ] terabit
- [ ] tebibit
- [ ] terabyte
- [ ] tebibyte
- [ ] petabit
- [ ] pebibit
- [ ] petabyte
- [ ] pebibyte

## Changelog

### 1.3.0

- Add poundsToTonnes function
- Add tonnesToPounds function
- Update docs site

### 1.2.5

- Replace docs with link to js.org

### 1.2.4

- Add dynamic docs generation

### 1.2.3

- Add documentation for time functions

### 1.2.2

- Add codecov integration

### 1.2.1

- Add travis-ci integration

### 1.2.0

- add time functions to time.js
- add millisecondsToSeconds function 
- add millisecondsToMinutes function
- add millisecondsToHours function
- add millisecondsToDays function
- add secondsToMilliseconds function
- add minutesToMilliseconds function
- add hoursToMilliseconds function
- add daysToMilliseconds function

### 1.1.0

- Add stonesToPounds function
- Add poundsToStones function