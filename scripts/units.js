const categories = require('../src/data/categories.json');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const titleCase = require('title-case');
const camelCase = require('camel-case');
const shell = require('shelljs');

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
	const unitsWithFunctions = category.units.map(unit => {
		return {
			...unit,
			functions: Object.entries(unit.conversionFormulae).map(([key, value]) => {
				return {
					name: `${unit.name}-to-${key}`,
					contents: `/**
 * Converts ${titleCase(unit.name)} (${unit.symbol}) to ${titleCase(key)} (${category.units.find(unit => unit.name === key).symbol})
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

	let categoryFileImports = '';
	let categoryFileFunctions = [];
	const categoryFileName = `${category.name}.js`;
	const categoryPath = `./src/${category.name}`;

	unitsWithFunctions.forEach(unit => {
		return unit.functions.forEach(unitFunction => {
			const functionPath = `${categoryPath}/${unitFunction.name}.js`;
			const functionName = camelCase(unitFunction.name);

			categoryFileImports = categoryFileImports + `import ${functionName} from '${functionPath.replace('./src/', './')}';\n`;
			categoryFileFunctions.push(functionName);

			shell.mkdir('-p', categoryPath);
			console.log(`Writing ${unitFunction.name} to ${functionPath}`);
			fs.writeFileSync(functionPath, unitFunction.contents);
		});
	});

	console.log(`Writing to ${categoryFileName}`);
	fs.writeFileSync(`./src/${categoryFileName}`, `
${categoryFileImports}
export default {${categoryFileFunctions.reduce((acc, curr) => {
		return `${acc}${acc !== '' ? ',' : ''}\n\t${curr}`
	}, '')}
};
	`);
});
