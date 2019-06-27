import fs from 'fs'

// note this gets run for each page !

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
*/

const plots = fs.readdirSync('plots')
	.map((f, i) => ({
		id: i,
		path: 'plots/' + f,
		title: capitalizeFirstLetter(f.slice(0, 32).replace(/_/g, ' ').replace('ecmwf', 'ECMWF'))
	}))
	.filter((f, i) => {
		return i < 6
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
				component: 'src/containers/Post',
				template: 'src/containers/Post',
				getData: () => ({
					item,
				})
			}))
		}
		]
	}
}
