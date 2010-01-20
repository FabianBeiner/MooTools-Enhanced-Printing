# EnhancedPrinting

With this script and some CSS you easily can enhance the print layout of your website with additional information (as footnes), like showing the referring URL of links, marking them if they're external or the explanation of an abbreviation (&lt;abbr&gt;-tag).

(The initial version of this script was made for an article in the German "Webstandards-Magazin" (3/09).)

## How to use

### Syntax

	#JS
	new EnhancedPrinting(content[, options]);

*You have to include EnhancedPrinting.css or copy the styles into your CSS.*

### Arguments

* content - (*mixed*) The element or the id of the element with the printable content.
* options (*object*, optional) The options object described below:

### Options

* headings - (*boolean*) Default: true. Whether to show headers containing the title, url and last modified date of the document.
* infoString - (*string*) How the information about the document is displayed. Placeholders: \*url\* and the [keys of Date.format](http://mootools.net/docs/more/Native/Date#Date:format) for the last modified date. Defaults to the american string '(%url% last edited at %x %X)'.
* links - (*boolean*) Default: true. Whether to display footnotes containing the url of the link.
* favicons - (*boolean*) Default: true: Whether to show favicons before the url.
* abbr - (*boolean*) Default: true. Whether to show footnotes containing the expansions of the &lt;abbr&gt;-tags.

## Screenshot

![Screenshot](http://xs.to/image-74D8_4B576FE2.jpg "Example output")