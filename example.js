'use strict'

const render = require('.')

let wikitext = ''
process.stdin.on('data', (chunk) => {
	wikitext += chunk.toString('utf8')
})
process.stdin.on('end', () => {
	render(wikitext)
	.then((html) => {
		process.stdout.write(html)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
})
