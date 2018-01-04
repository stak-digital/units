
import area from './area.js'
import length from './length.js'
import temperature from './temperature.js'
import time from './time.js'
import weight from './weight.js'

export default {
	...area,
	...length,
	...temperature,
	...time,
	...weight
};
