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

## API

### Length

Available Functions

| Name | Category | Arguments | Description |
| -------------- | ------ | --------------- | --------------------------------- |
| inchesToMeters | length | inches <number> | Convert inches (in) to meters (m) | 
| metersToInches | length | meters <number> | Convert meters (m) to inches (in) | 
| metersToFeet | length | meters <number> | Convert meters (m) to feet (ft) | 
| feetToMeters | length | feet <number> | Convert feet (ft) to meters (m) | 

### Weight

Available Functions

| Name | Category | Arguments | Description |
| -------------- | ------ | --------------- | --------------------------------- |
| poundsToKilograms | weight | pounds <number> | Convert pounds (lb) to kilograms (kg) | 
| kilogramsToPounds | weight | kilograms <number> | Convert kilograms (kg) to pounds (lb) | 
| kilogramsToStones | weight | kilograms <number> | Convert kilograms (kg) to stones (st) | 
| stonesToKilograms | weight | stones <number> | Convert stones (st) to kilograms (kg) | 
| stonesToPounds | weight | stones <number> | Convert stones (st) to pounds (lb) | 
| poundsToStones | weight | pounds <number> | Convert pounds (lb) to stones (st) |
 
### Time

Available Functions

| Name | Category | Arguments | Description |
| -------------- | ------ | --------------- | --------------------------------- |
| daysToMilliseconds | time | days <number> | Convert days to milliseconds | 
| hoursToMilliseconds | time | hours <number> | Convert hours to milliseconds | 
| millisecondsToDays | time | milliseconds <number> | Convert milliseconds to days | 
| millisecondsToHours | time | milliseconds <number> | Convert milliseconds to hours | 
| millisecondsToMinutes | time | milliseconds <number> | Convert milliseconds to minutes | 
| millisecondsToSeconds | time | milliseconds <number> | Convert milliseconds to seconds | 
| minutesToMilliseconds | time | minutes <number> | Convert minutes to milliseconds | 
| secondsToMilliseconds | time | seconds <number> | Convert seconds to milliseconds | 

## Changelog

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