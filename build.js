const babel = require('babel-core');
const glob = require('glob');
const fs = require('fs');

glob('./src/**/*.js', {}, (er, files) => {
	files.forEach(file => {
		babel.transformFile(file, {presets: ['es2015', 'es2017', 'stage-3'], babelrc: false}, (err, result) => {
			if (!err) {
				console.log(`${file} transpiled`);

				fs.writeFileSync(`./${result.options.basename}.js`, result.code);
			}
		});
	})
});