/*
---
description: EnhancedPrinting class

license: LICENSE file included

authors:
- Fabian Beiner
- Tim Baumann

requires:
- core/1.2.4: '*'
- more/1.2.4.2: 'URI'
- more/1.2.4.2: 'Date'

provides: [EnhancedPrinting]

...
*/

var EnhancedPrinting = new Class({
	Implements: [Events, Options],

	options: {
		headings: true,
		infoString: '(%url% last edited at %x %X)',
		links: true,
		favicons: true,
		abbr: true
	},

	initialize: function(content, options) {
		this.content = $(content) || $(document.body);
		this.setOptions(options);
		this.base = URI.base;
		this.host = this.base.get('host');
		this.i = 0;
		this.div = new Element('div', {
			'id': 'print-extras'
		}).inject(document.body);
		if (this.options.headings) this.setupHeadings();
		if (this.options.links || this.options.abbr) {
			this.ol = new Element('ol').inject(this.div);
			if (this.options.links) this.handleLinks();
			if (this.options.abbr) this.handleAbbr();
		}
	},

	setupHeadings: function() {
		new Element('h2', {
			'html': document.title
		}).inject(this.div);
		new Element('h3', {
			'html': Date.parse(document.lastModified).format(this.options.infoString.replace('%url%', this.base))
		}).inject(this.div);
	},

	handleLinks: function() {
		this.handleElements('a', 'href', function(li, el) {
			var url = el.get('href');
			li.set('html', url + (!url.contains(this.host) ? ' &rarr;': ''));
			if (this.options.favicons) {
				var favicon = new URI('/favicon.ico', {
					base: url
				}).toString();
				var img = new Element('img', {
					'src': favicon,
					'class': 'favicon'
				}).inject(li, 'top');
				img.addEvent('error', function() {
					this.dispose();
				});
			}
		}.bind(this));
	},

	handleAbbr: function() {
		this.handleElements('abbr', 'title', function(li, el) {
			li.set('html', el.get('html') + ': ' + el.get('title'));
		});
	},

	handleElements: function(els, attribute, setFootnoteContent) {
		els = this.content.getElements(els);
		if (els.length) {
			var sorted = [];
			els.each(function(el) {
				if (el.get(attribute) != el.get('text')) {
					var index = sorted.indexOf(el.get(attribute));
					if (index == -1) {
						sorted.push(el.get(attribute));
						var li = new Element('li');
						if (setFootnoteContent) {
							setFootnoteContent(li, el);
						} else {
							li.set('html', item);
						}
						li.inject(this.ol);
						index = sorted.length - 1;
					}
					new Element('span', {
						'text': ' [' + (index + this.i + 1) + ']',
						'class': 'footnote-reference'
					}).inject(el, 'after');
				}
			}, this);
			this.i += sorted.length;
		}
	}
});