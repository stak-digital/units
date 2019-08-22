const fs = require('fs');
const glob = require('glob');
const allege = require('allege');
const camelCase = require('camel-case');
const commentParse = require('comment-parser');
const getFileNameFromPath = require('@lukeboyle/get-filename-from-path');

(() => {
	glob('src/**/*.ts', {}, (err, files) => {
		const itemsToIgnore = fs.readdirSync('./src').filter(file => {
			return !fs.statSync(`./src/${file}`).isDirectory();
		}).map(file => `src/${file}`);
		const filesWithoutAggregateFiles = files.filter(file => allege(file).isNoneOf(...itemsToIgnore));
		const docs = filesWithoutAggregateFiles.map(file => {
			const fileContent = fs.readFileSync(file, {encoding: 'utf-8'});
			const jsDocContent = commentParse(fileContent.slice(fileContent.indexOf('/**'), fileContent.indexOf('*/') + 2))[0];
			const arguments = jsDocContent.tags.filter(tag => tag.tag === 'param').map(tag => {
				return {
					name: tag.name,
					type: tag.type,
					optional: tag.optional,
					description: tag.description
				};
			});
			const returns = jsDocContent.tags.filter(tag => tag.tag === 'returns').map(tag => {
				return {
					name: tag.name,
					type: tag.type,
					description: tag.description
				};
			});
			const srcIndex = file.indexOf('/') + 1;
			const fileWithoutSrc = file.slice(srcIndex);

			return {
				functionName: camelCase(getFileNameFromPath(file).replace('.ts', '')),
				description: jsDocContent.description,
				category: fileWithoutSrc.slice(0, fileWithoutSrc.indexOf('/')),
				arguments,
				returns
			};
		});

		fs.writeFileSync('docs/docs.json', JSON.stringify(docs));
	});
})();