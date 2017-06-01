# render-wikipedia-article

**Render [Wiki Markup](https://en.wikipedia.org/wiki/Help:Wiki_markup) articles from Wikipedia as HTML.**

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
