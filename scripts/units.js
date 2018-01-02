const categories = require('../src/data/categories.json');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const titleCase = require('title-case');

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {Array.<{
 *     name: {string}
 *     conversionFormulae: {Object}
 *     functions: {Array}
 * }>} units
 */
categories.map(category => {
	const categoryFileName = `${category.name}.js`;

	const unitsWithFunctions = category.units.map(unit => {
		return {
			...unit,
			functions: Object.entries(unit.conversionFormulae).map(([key, value]) => {
				return {
					name: `${unit.name}-to-${key}`,
					contents: `
/**
 * Converts ${unit.name} (${unit.symbol}) to ${key}
 * @param {number} ${unit.name}
 * @returns {number}
 */
export default function(${unit.name}) {
	return ${value.replace('n', unit.name)};
}
						`
				};
			})
		};
	});

	unitsWithFunctions.forEach(unit => {
		unit.functions.forEach(unitFunction => {
			const categoryPath = `./src/${category.name}`;

			mkdirp(categoryPath, err => {
				if (!err) {
					const functionPath = `${categoryPath}/${unitFunction.name}.js`;

					console.log(`Writing ${unitFunction.name} to ${functionPath}`);
					fs.writeFileSync(functionPath, unitFunction.contents);
				} else {
					console.error(err);
				}
			})
		});
	});
});
