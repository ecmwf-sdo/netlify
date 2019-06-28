import fs from 'fs'
import path from 'path'

// note this gets run for each page !

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function make_title(f) {
	var a = f.slice(0, 56)
		.replace(/_/g, ' ')
		.replace('ecmwf', 'ECMWF')
		.split(' ')
	a.shift()
	a.shift()
	a.pop()
	return capitalizeFirstLetter(a.join(' '))
}

const plots = fs.readdirSync('plots')
	.map((f, i) => ({
		id: i,
		path: '' + f,
		title: make_title(f)
	}))
	.filter((f, i) => {
		return i < 100
	})

export default {
	getSiteData: async () => ({
		title: 'Hackathon',
	}),
	/*
	createSharedData: () => {
		hello: 'hello'
	},
	*/
	getRoutes: async () => {
		return [
		{
			path: '/',
			template: 'src/containers/Homepage',
			getData: () => {
				return plots
			},
			children: plots.map(item => ({
				path: `/plot/${item.id}`,
				component: 'src/containers/Plot',
				template: 'src/containers/Plot',
				getData: () => ({
					item,
				})
			}))
		}
		]
	},
	plugins: [
		[
			require.resolve('react-static-plugin-source-filesystem'),
			{
				location: path.resolve('./src/pages'),
			},
		],
		require.resolve('react-static-plugin-reach-router')
	]
}
