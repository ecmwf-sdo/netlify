import fs from 'fs'
import path from 'path'
import React from 'react'

export default pluginOptions => ({

	/*
	beforeRenderToHtml: async (element, state) => {
		// You must return an element (already rendered), not a component
		const newApp = <div id="wrapped">
			<div id="pre">Pre</div>
				{element}
			</div>
		return newApp
	},
	*/

	///*
	// https://github.com/nozzle/react-static/blob/master/docs/plugins/node-api.md#beforehtmltodocument
	beforeHtmlToDocument: async (html, state) => {
		// html is a string here. You can do whatever you like with it!
		// (but when the App re-renders we get unexpected result)
		//return '<div class="plugin">XHello</div>' + html

		
		//let template = fs.readFileSync(path.resolve(__dirname, 'build/index.html'), 'utf8')
													//console.log('state=', state);
													//console.log('', template);
		// !!?? is appending to the original, not replacing
		//return template

		return html
	},
	//*/

	// https://github.com/nozzle/react-static/blob/master/docs/plugins/node-api.md#beforehtmltofile
	beforeDocumentToFile: async (html, state) => {
		// html is a string here. You can do whatever you like with it!
		var a = html.replace('\n', '').match(/(^.*body>).*(<div id=.*root.*html.*$)/)
		if(!a) throw Error('html parse failed')
		var header = fs.readFileSync(path.resolve(__dirname, 'src/built/header.html'), 'utf8')
		var footer = fs.readFileSync(path.resolve(__dirname, 'src/built/footer.html'), 'utf8')
		return (
			a[1] +
			'\n<div class="inner-body"><div class="menu-collapse-overlay"></div>' +
			header +
			a[2]
			// </div> // end inner-body
		)
		.replace(/<script/g, '\n<script')
		.replace('<\/body', '\n</body')

	},

	webpack: (currentWebpackConfig, state) => {
		/*
		currentWebpackConfig.mode = 'development'

		// the pug loader must be _after_ the js loaders
		currentWebpackConfig.module.rules[0].oneOf.splice(2, 0, {
			test: /\.(pug|jade)$/,
			use: [
				'babel-loader',
				{
					loader: 'pug-as-jsx-loader'
					//options: { filename: '/home/tim/hackathon/site/src/template.jade', basedir: '/home/tim/hackathon/site/src' }
				}
			]
		})
		*/

		return currentWebpackConfig
	},

	afterExport: async state => {
		var pngs = state.clientStats.assets.filter((v) => v.name.match(/png$/))
		pngs.forEach(() => {
			// TODO modify the html to replace the original img name with the correct asset path
		})

		return state
	}
})
