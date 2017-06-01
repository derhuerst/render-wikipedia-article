'use strict'

const parseWikitext = require('parsoid-jsapi').parse
const HTMLParser = require('parse5/lib/parser')
const HTMLSerializer = require('parse5/lib/serializer')

const render = (wikitext) => {
	return parseWikitext(wikitext)
	.then((res) => {
		const parser = new HTMLParser()
		const ast = parser.parse(res.out)

		const htmlNode = ast.childNodes.find((n) => n.tagName === 'html')
		const headNode = htmlNode.childNodes.find((n) => n.tagName === 'head')

		// remove `<base>` element
		headNode.childNodes = headNode.childNodes.filter((n) => n.tagName !== 'base')

		const titleNode = headNode.childNodes.find((n) => n.tagName === 'title')
		// todo: fill `<title>` element with page title

		// todo: fix stylesheet links

		const serializer = new HTMLSerializer(ast)
		return serializer.serialize()
	})
}

module.exports = render
