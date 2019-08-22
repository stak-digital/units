const fs = require('fs');
const glob = require('glob');
const titleCase = require('title-case');
const camelCase = require('camel-case');
const kebabCase = require('kebab-case');
const getFilenameFromPath = require('@lukeboyle/get-filename-from-path');
const shell = require('shelljs');
const chalk = require('chalk');

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {Array.<{
 *     name: {string}
 *     convertTo: {Object}
 *     functions: {Array}
 * }>} units
 */

glob('./src/data/*.json', (err, files) => {
	const categories = files.map(file => {
		return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
	});

	categories.map(category => {
		const unitsWithFunctions = category.units.map(unit => {
			return {
				...unit,
				functions: Object.entries(unit.convertTo).map(([key, value]) => {
					const functionAsKebabCase = `${kebabCase(unit.name)}-to-${kebabCase(key)}`;
					const functionName = camelCase(functionAsKebabCase);

					return {
						name: functionAsKebabCase,
						contents: `/**
 * Converts ${titleCase(unit.name)} (${unit.symbol}) to ${titleCase(key)} (${category.units.find(unit => unit.name === key).symbol})
 * @param {number} ${unit.name}
 * @returns {number}
 */
export default function(${unit.name} : number) : number {
	return ${value.formula.replace('n', unit.name)};
}
`,
						tests: `import ${functionName} from '../../src/${category.name}/${functionAsKebabCase}';
import expect from 'expect';

test('it should exist', () => {

	expect(
		${functionName}
	).toExist();

});

test('it should return the correct values', () => {

	expect(
		${functionName}(1)
	).toBe(${value.nEqualsOne});

});
`
					};
				}),
			};
		});

		let categoryFileImports = '';
		let categoryFileFunctions = [];
		const categoryFileName = `${category.name}.ts`;
		const categoryPath = `./src/${category.name}`;

		unitsWithFunctions.forEach(unit => {
			return unit.functions.forEach(unitFunction => {
				const functionPath = `${categoryPath}/${unitFunction.name}.ts`;
				const functionName = camelCase(unitFunction.name);

				categoryFileImports = categoryFileImports + `import ${functionName} from '${functionPath.replace('./src/', './').replace('.ts', '')}';\n`;
				categoryFileFunctions.push(functionName);

				shell.mkdir('-p', categoryPath);
				console.log(chalk.green(`Writing ${unitFunction.name} to ${functionPath}`));
				fs.writeFileSync(functionPath, unitFunction.contents);

				const testsPath = `./tests/${category.name}`;

				shell.mkdir('-p', testsPath);
				console.log(chalk.green(`Writing ${unitFunction.name} tests to ${testsPath}`));
				fs.writeFileSync(`${testsPath}/${unitFunction.name}.test.ts`, unitFunction.tests);
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

		console.log(chalk.green(`Writing to ${categoryFileName} tests`));
		fs.writeFileSync(`./tests/${category.name}.test.ts`, `import ${camelCase(category.name)} from '../src/${category.name}';
import expect from 'expect';

test('it should exist', () => {

	expect(
		${camelCase(category.name)}
	).toExist();

});

test('it should have all ${category.name} properties', () => {

	${unitsWithFunctions.map(unit => {
			return unit.functions.reduce((acc, curr) => {
				return acc + `
	expect(
		${camelCase(category.name)}.${camelCase(curr.name)}
	).toExist();

	expect(
		${camelCase(category.name)}.${camelCase(curr.name)}
	).toBeA(Function);
		`;
			}, '')
		}).join('')}

});
`);

		glob('./src/*.ts', (err, files) => {
			const filesWithoutIndex = files.filter(file => !file.includes('index.ts'));

			const contents = `${filesWithoutIndex.reduce((acc, curr) => {
				const filename = getFilenameFromPath(curr);

				return `${acc}\nimport ${camelCase(filename.replace('.ts', ''))} from './${filename.replace('.ts', '')}'`;
			}, '')}

export default {${filesWithoutIndex.reduce((acc, curr) => {
				const filename = getFilenameFromPath(curr).replace('.ts', '');

				return `${acc}${acc !== '' ? ',' : ''}\n\t...${camelCase(filename)}`;
			}, '')}
};
`;
			fs.writeFileSync('./src/index.ts', contents);
		});
	});
});
