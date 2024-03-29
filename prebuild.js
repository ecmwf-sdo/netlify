/*
 *  Build content-dependent CSS
 */
const fs = require('fs')

const n_columns = 6

fs.writeFileSync(
	'src/content.css',
	fs.readdirSync('plots')
		.map((f, i) => {
			return '.i-' + i + ' { left: ' + ((i % n_columns) * 180) + 'px; top: ' + (Math.floor(i / n_columns) * 180) + 'px; }\n' +
				'.i-' + i + ' .thumbnail-img { background-image: url(../plots/' + f + ');}'
		})
		.filter((f, i) => i < 100)
		.join('\n')
)
