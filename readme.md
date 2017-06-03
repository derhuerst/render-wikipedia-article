# render-wikipedia-article

**Render [Wiki Markup](https://en.wikipedia.org/wiki/Help:Wiki_markup) articles from Wikipedia as HTML.**

*Warning*: I don't intend to maintain this project. It was meant as an experiment to render Wikitext to HTML. This is harder than you might think:

- [Wiki markup has crazy syntax](https://en.wikipedia.org/wiki/Help:Wiki_markup) with [lots of problems](https://www.mediawiki.org/wiki/Parsoid/limitations)
- [Parsoid](https://www.mediawiki.org/wiki/Parsoid) is a huge, hacky piece of software
	- [it does network requests deep down in the parsing logic](https://github.com/wikimedia/parsoid/blob/95ab1203078d26a459de1e09aedcebce0fdedf40/lib/wt2html/tt/TemplateHandler.js#L1222)
	- [it is built as a monolithic web service](https://github.com/wikimedia/parsoid/blob/d07dfe1/lib/api/ParsoidService.js)
	- it takes about 30s to convert the page for [Barack Obama](https://en.wikipedia.org/wiki/Barack_Obama)
	- [it is way too large](https://github.com/wikimedia/parsoid/blob/8cf86d1/package.json#L7-L31)
- [wtf_wikipedia](https://github.com/spencermountain/wtf_wikipedia) is simple and lightweight, but
	- it uses regular expressions to parse, which is error-prone and limited
	- it fails to parse common items of Wikipedia articles
	- [it doesn't give you the page hierarchy](https://github.com/spencermountain/wtf_wikipedia/blob/ab95743/README.md#sample-output)
- on the long run, [Wikimedia seems to move to HTML as canonical format](https://blog.wikimedia.org/2013/03/04/parsoid-how-wikipedia-catches-up-with-the-web/)

I settled with the solution to [fetch the mobile HTML directly](https://github.com/derhuerst/wikipedia-articles-feed/blob/5b6dfd8/fetch-page-revision.js).

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
[![npm version](https://img.shields.io/npm/v/render-wikipedia-article.svg)](https://www.npmjs.com/package/render-wikipedia-article)
[![build status](https://img.shields.io/travis/derhuerst/render-wikipedia-article.svg)](https://travis-ci.org/derhuerst/render-wikipedia-article)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/render-wikipedia-article.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install derhuerst/render-wikipedia-article
```


## Usage

```js
const render = require('render-wikipedia-article')

render(someWikitext)
.then((html) => {
	console.log(html)
})
.catch(console.error)
```


## Contributing

If you have a question or have difficulties using `render-wikipedia-article`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/render-wikipedia-article/issues).
