const categories = require('../src/data/categories.json');

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {Array.<Object>} units
 */
categories.map(category => {
	const categoryFileName = `${category.name}.js`;

	console.log(category.units);
});