# EnhancedPrinting

Mit diesem Script und etwas CSS können Sie das Drucklayout Ihrer Webseite mit zusätzlichen Informationen (als Fußnoten), wie die verweisende URL von Links oder die Erklärung einer Abkürzung (&lt;abbr&gt;-Tag), erweitern. Version 1.0 ist die Version, die im Webstandardsmagazin Ausgabe 3/09 vorgestellt wurde.  
With this script and some CSS, you can enhance the printlayout of your website with additional information (as footnotes), like showing the referring URL of links or the declaration of an acronym (&lt;abbr&gt;-tag).

![Screenshot](http://img402.imageshack.us/img402/3801/beispiel.jpg)

## How to use

### Syntax

	#JS
	new EnhancedPrinting(content[, options]);

### Arguments

* content - (*mixed*) The element or the id of the element with the printable content.
* options (*object*, optional) The options object described below:

### Options

* headings - (*boolean*) Default: true. Whether to show headers containing the title, url and last modified date of the document.
* infoString - (*string*) How the information about the document is displayed. Placeholders: \*url\* and the [keys of Date.format](http://mootools.net/docs/more/Native/Date#Date:format) for the last modified date. Defaults to the german string '(%url% zuletzt bearbeitet am %d.%m.%Y um %H:%M Uhr)'.
* links - (*boolean*) Default: true. Whether to display footnotes containing the url of the link.
* favicons - (*boolean*) Default: true: Whether to show favicons before the url.
* abbr - (*boolean*) Default: true. Whether to show footnotes containing the expansions of the &lt;abbr&gt;-tags.

## Screenshots

![Screenshot 1](http://img402.imageshack.us/img402/3801/beispiel.jpg)