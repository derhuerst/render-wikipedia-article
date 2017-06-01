'use strict'

const {parse} = require('wtf_wikipedia')
const h = require('virtual-dom/h')
const slugg = require('slugg')

const render = (wikitext) => {
	const data = parse(wikitext)
	const out = []

	for (let [heading, content] of data.text) {
		const text = content.map((chunk) => {
			// todo: links, end of paragraph
			return chunk.text
		}).join(' ')

		out.push(h('h2', {id: slugg(heading)}, heading), text)
	}

	return h('main', {}, out)
}

module.exports = render
