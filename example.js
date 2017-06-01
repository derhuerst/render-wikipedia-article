'use strict'

const toHTML = require('vdom-to-html')

const render = require('.')

let wikitext = ''
process.stdin.on('data', (chunk) => {
	wikitext += chunk.toString('utf8')
})
process.stdin.on('end', () => {
	try {
		process.stdout.write(toHTML(render(wikitext)))
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
})
