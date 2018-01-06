# Units by Stak Digital

[![Build Status](https://travis-ci.org/stak-digital/units.svg?branch=master)](https://travis-ci.org/stak-digital/units)
[![codecov](https://codecov.io/gh/stak-digital/units/branch/master/graph/badge.svg)](https://codecov.io/gh/stak-digital/units)

A highly modular unit conversion library.

## Getting Started

`yarn add @stak-digital/units`
`npm install --save @stak-digital/units`

## Usage

The library is split into three tiers:

- Library (index.js)
- Conversion category (weight.js, length.js)
- Individual function (poundsToKilograms.js)

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

## Development

## Adding a new unit

- If the unit belongs to an existing category, add the unit to that category; otherwise
	- Create a new category in `./src/data/categories.json`
		- Each category should have a name and units array
- If the unit exists already, add your desired conversion in the `convertTo` property; otherwise
	- Create a new unit under the category with a name, symbol and convert to 
	property. Each unit should have at least one convertTo
	- Additionally, a convertTo needs to have a respective unit in the given 
	category to allow interoperability between the units (see below)

```json
{
	"units": [
		{
			"name": "fahrenheit",
			"symbol": "F",
			"convertTo": {
				"celsius": {
					"formula": "(n - 32) * (5/9)",
					"nEqualsOne": -17.22222222222222
				}
			}
		},
		{
			"name": "celsius",
			"symbol": "C",
			"convertTo": {
				"fahrenheit": {
					"formula": "(n * (9/5)) + 32",
					"nEqualsOne": 33.8
				}
			}
		}
	]
}
``` 

- Each conversion must have a formula property where the input unit is represented by `n`
and an nEqualsOne value which rep

## Roadmap

## General

- [ ] Convert existing functions into json version
- [ ] Add roadmap to docs site
- [ ] Convert docs site to statically rendered (there's no reason for preact beyond search)

## Area Category
- [x] Square Metres
- [x] Acres
- [x] Hectares
- [x] Square Yard
- [x] Square Foot

## Temperature Category

- [x] Kelvin
- [x] Celsius
- [x] Fahrenheit

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

### 1.5.0

- Add support for square meters
- Add support for square feet
- Add support for square kilometers
- Add support for hectares

### 1.4.3

- Add styles to docs site and update internal links

### 1.4.2

- Update development documentation

### 1.4.1

- Update docs site [https://units.js.org](https://units.js.org)

### 1.4.0

- Add support for Kelvin, Fahrenheit and Celsius conversions

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