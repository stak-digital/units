const categories = require('../src/data/categories.json');
const fs = require('fs');
const glob = require('glob');
const titleCase = require('title-case');
const camelCase = require('camel-case');
const getFilenameFromPath = require('@lukeboyle/get-filename-from-path');
const shell = require('shelljs');
const chalk = require('chalk');

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
			console.log(chalk.green(`Writing ${unitFunction.name} to ${functionPath}`));
			fs.writeFileSync(functionPath, unitFunction.contents);
		});
	});

	console.log(chalk.green(`Writing to ${categoryFileName}`));
	fs.writeFileSync(`./src/${categoryFileName}`, `
${categoryFileImports}
export default {${categoryFileFunctions.reduce((acc, curr) => {
		return `${acc}${acc !== '' ? ',' : ''}\n\t${curr}`
	}, '')}
};
	`);

	glob('./src/*.js', (err, files) => {
		const filesWithoutIndex = files.filter(file => !file.includes('index.js'));

		const contents = `${filesWithoutIndex.reduce((acc, curr) => {
	const filename = getFilenameFromPath(curr);
	
	return `${acc}\nimport ${filename.replace('.js', '')} from './${filename}'`;
}, '')}

export default {${filesWithoutIndex.reduce((acc, curr) => {
	const filename = getFilenameFromPath(curr).replace('.js', '');

	return `${acc}${acc !== '' ? ',' : ''}\n\t...${filename}`;
}, '')}
};
		`;
		fs.writeFileSync('./src/index.js', contents);
	});
});
