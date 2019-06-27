/*
 *  Build content-dependent CSS
 */
const fs = require('fs')

const n_columns = 4

fs.writeFileSync(
	'src/content.css',
	fs.readdirSync('plots')
		.map((f, i) => {
			return '.i-' + i + ' { left: ' + ((i % n_columns) * 200) + 'px; top: ' + (Math.floor(i / n_columns) * 200) + 'px; }\n' +
				'.i-' + i + ' .thumbnail-img { background-image: url(../plots/' + f + ');}'
		})
		.filter((f, i) => i < 6)
		.join('\n')
)
