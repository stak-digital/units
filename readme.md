# Lodash for unit conversions
## Units by Stak Digital

[![codecov](https://codecov.io/gh/stak-digital/units/branch/master/graph/badge.svg)](https://codecov.io/gh/stak-digital/units)

A highly modular unit conversion library.

For full API docs, visit [https://units.js.org](https://units.js.org)

## Getting Started

`yarn add @stak-digital/units`

- OR -

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

## Supported Units

### Area

- Acres (ac)
- Hectares (ha)
- Square Feet (ft²)
- Square Kilometers (km²)
- Square Meters (m²)
- Square Yards (yd²)

### Temperature

- Kelvin (K)
- Celsius (˚C)
- Fahrenheit (˚F)
- Rankine (˚R)

### Computer Data 
- bit
- byte
- kilobit
- kilobyte
- megabit
- megabyte
- gigabit
- gigabyte
- terabit
- terabyte
- petabit
- petabyte

### Length

- Feet (ft)
- Meters (m)
- Inches (in)

### Time

- Days
- Hours
- Minutes
- Seconds
- Milliseconds
- Microseconds
- Nanoseconds

### Weight

- Kilograms
- Pounds
- Stones
- Tonnes

### Frequency

- Hertz (Hz)
- Kilohertz (kHz)
- Megahertz (mHz)
- Gigahertz (gHz)
- Revolutions per minute (rpm)

### Force

- newton (N)
- dyne (dyn)
- kilopond (kp)
- poundal (pdl)
- pound-force (lbf)
- ounce-force (ozf)

## Development

### Adding a new unit

- If the unit belongs to an existing category, add the unit to that category; otherwise
	- Create a new category file in `./src/data/`
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
and an nEqualsOne value which represents the return value when an input of `1` is put through the formula.

## Roadmap

### General

- [x] Convert existing functions into json version
- [x] Add expand collapse to each category in the sub-nav and main of docs site
- [ ] Add roadmap to docs site
- [ ] Convert docs site to Vue Press
- [ ] add typescript typings

### Angles

- Radian (rad)
- Degree (deg)
- Arcminute (amin)
- Arcsecond (asec)

### Volume

- Cubic meter (m^3)
- liters (L)
- milliliters (mL)
- cubic feet (cu ft)
- cubic inches (cu in)
- gallons (gal)
- quarts (qt)
- pints (pt)
- fluid ounces (fl oz)
- tablespoons (tbsp)
- teaspoons (tsp)

### Velocity

- meters per second (m/s)
- mile per hour (mph)
- kilometer per hour (km/h)
- feet per second (fps)
- knot (kn)
- speed of light (c)
- speed of sound (s)

### Fuel Efficiency

- Kilometers per liter (km/L)
- miles per gallon (mi/gal)
- liter per 100 kilometers (L/100km)
- gallons per 100 miles (gal/100mi)

### Density

- kilograms per cubic meter (kg/m^3)
- kilograms per liter (kg/L)
- grams per cubic centimeter (g/cm^3)
- ounces per cubic foot (oz/ft^3)
- ounces per cubic inch (oz/in^3)
- pounds per cubic foot (lb/ft^3)
- pounds per cubic inch (lb/in^3)
- ounces per gallon (oz/gal)
- pounds per gallon (lb/gal)

### Flow

- cubic meters per second (m^3/s)
- liters per minute (L/min)
- gallons per minute (gal/min)
- cubic meters per hour (m^3/h)

### Acceleration 

- Meters per second squared (m/s^2)
- galileo (Gal)
- standard gravity (g)
- mile per hour per second (mph/s)
- knot per second (kn/s)

### Pressure

- pascal (Pa)
- pounds per square inch (psi)
- atmosphere (atm)
- bar (bar)
- millibar (mbar)
- millimeter of mercury (mmHg)
- kilopascal (kPa)
- megapascal (MPa)

### Torque

- Foot-pound (ft·lbf)
- Inch-pound (in·lbf)
- Newton meter (N·m)
- Kilopond-meter (kp·m)

### Energy

- joule (J)
- erg (erg)
- kilowatt-hour (kW·h)
- megawatt-hour (MW·h)
- calorie (cal)
- kilocalorie (kcal)
- British thermal unit (Btu)

### Viscosity 

- pascal seconds (Pa·s)
- poise (P)
- pounds per foot hour (lb/(ft·h))
- pounds per foot second (lb/(ft·s))

### Current

- ampere (A)
- abampere (abA)
- statampere (statA)

### Charge

- coulomb (C)
- abcoulomb (abC)
- statcoulomb (statC)
- faraday (F)
- milliampere hour (mA·h)

### Voltage

- volt (V)
- abvolt (abV)
- statvolt (statV)

### Luminance

- candela per square meter (cd/m^3)
- stilb (sb)
- lambert (L)
- footlambert (fL)

### Illuminance

- lux (lx)
- phot (ph)
- footcandle (fc)

### Radiation

- gray (Gy)
- rad (rad)
- sievert (Sv)
- rem (rem)

### Radioactivity

- becquerel (Bq)
- curie (Ci)
- rutherford (rd)

## Changelog

### 1.8.0

- Add frequency category

### 1.7.1

- Update docs site with accordions on sections

### 1.7.0

- Add support for microseconds and nanoseconds
- Add full support for weight units

### 1.6.0

- Add support for major computer data units

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