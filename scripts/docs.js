const fs = require('fs');
const glob = require('glob');
const allege = require('allege');
const camelCase = require('camelcase');
const commentParse = require('comment-parser');
const itemsToIgnore = [
	'src/length.js',
	'src/index.js',
	'src/weight.js',
	'src/time.js'
];

function getFileNameFromPath(path) {
	const pathWithoutDirectory = path.includes('/') ? path.slice(path.indexOf('/') + 1, path.length - 1) : path;
	const pathWithoutExtensions = pathWithoutDirectory.includes('.js') ? pathWithoutDirectory.slice(0, pathWithoutDirectory.indexOf('.js')) : pathWithoutDirectory;

	if (pathWithoutDirectory.includes('/')) {
		return getFileNameFromPath(pathWithoutExtensions);
	} else {
		return pathWithoutExtensions;
	}
}

(() => {
	glob('src/**/*.js', {}, (err, files) => {
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
				functionName: camelCase(getFileNameFromPath(file)),
				description: jsDocContent.description,
				category: fileWithoutSrc.slice(0, fileWithoutSrc.indexOf('/')),
				arguments,
				returns
			};
		});

		fs.writeFileSync('docs/src/docs.json', JSON.stringify(docs));
	});
})();