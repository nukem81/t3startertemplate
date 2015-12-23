// RTE configuration based on the bootstrap package

// Unset default RTE config
RTE >

// RTE classes
RTE.classes {
	text-left {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.text-left
	}
	text-center {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.text-center
	}
	text-right {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.text-right
	}
	text-justify {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.text-justify
	}
	list-unstyled {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.list-unstyled
	}
	list-inline {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.list-inline
	}
	btn {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.btn
	}
	btn-default {
		name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:rte.class.btn-default
	}
}

// RTE basics
RTE.default {

	contentCSS = typo3conf/ext/t3startertemplate/Resources/Public/Build/StyleSheets/styles.css

	schema.sources {
		schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf
	}

	allowedTags (
		b, strong, i, em, u, strike, del, big, small, sub, sup, ol, ul, li, a, link,
		br, p, pre, h1, h2, h3, h4, hr, span,
		table, tr, th, td, thead, tbody, tfoot
	)

	skin = EXT:t3skin/rtehtmlarea/htmlarea.css

	removeComments = 1

	removeTags = center, font, o:p, sdfield, img

	removeTagsAndContents = link, meta, script, style, title

}

// RTE buttons
RTE.default.buttons {

	formatblock {
		removeItems = address, article, aside, div, header, footer, section, h5, h6, nav
	}

	blockstyle.disableStyleOnOptionLabel = 1

	textstyle.tags.a {
		allowedClasses (
			btn, btn-default
		)
	}

	bold.hotKey = b
	italic.hotKey = i
	underline.hotKey = u

	left.useClass = text-left
	center.useClass = text-center
	right.useClass = text-right
	justifyfull.useClass = text-justify

	toggleborders {
		setOnTableCreation = 1
		setOnRTEOpen = 1
	}
}

// RTE appearance
RTE.default {

	showButtons (
		formatblock, blockstyle, textstyle, bold, italic, underline, strikethrough, big, small, subscript, superscript,
		orderedlist, unorderedlist, left, center, right, justifyfull, copy, cut, paste,
		undo, redo, removeformat, link, unlink,	line, insertparagraphbefore, insertparagraphafter,
		chMode
	)

	#toolbarOrder (
		#	formatblock, blockstyle, textstyle, linebreak,
		#	bold, italic, underline, strikethrough, big, small, subscript, superscript, bar,
		#	orderedlist, unorderedlist, bar,
		#	left, center, right, justifyfull, copy, cut, paste, bar,
		#	undo, redo, removeformat, bar,
		#	link, unlink, bar,
		#	line, insertparagraphbefore, insertparagraphafter, bar,
		#	chMode, linebreak, table, tableproperties, toggleborders, tablerestyle, bar,
		#	rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, bar,
		#	columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, bar,
		#	cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
		#)

RTEHeightOverride = 700

rteResize = 1

contextMenu.disabled = 1

showStatusBar = 1

disableAlignmentFieldsetInTableOperations = 1
disableBordersFieldsetInTableOperations = 1
disableColorFieldsetInTableOperations = 1
disableLayoutFieldsetInTableOperations = 1
disableSpacingFieldsetInTableOperations = 1
disableDescriptionFieldsetInTableOperations = 1

}

// Processing rules
RTE.default.proc {

	overruleMode = ts_css

	dontConvBRtoParagraph = 1

	preserveDIVSections = 0

	denyTags = img, center, font, span

	allowedClasses (
		text-left, text-center, text-right, text-justify,
		list-unstyled, list-inline,
		btn, btn-default
	)

	allowTagsOutside (
		blockquote, h1, h2, h3, h4, hr, pre, table, ul, ol
	)

	keepPDIVattribs =

	dontUndoHSC_db = 1
	dontHSC_rte = 1
}

// Processing entryHTMLparser_db
RTE.default.proc.entryHTMLparser_db = 1
RTE.default.proc.entryHTMLparser_db {

	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	htmlSpecialChars = 0

	tags {

		span {
			fixAttrib {
				style.unset = 1
				lang.unset = 1
			}
			allowedAttribs >
			rmTagIfNoAttrib = 1
		}

		h1.fixAttrib.class.list = text-left, text-center, text-right, text-justify
		h2.fixAttrib.class.list = text-left, text-center, text-right, text-justify
		h3.fixAttrib.class.list = text-left, text-center, text-right, text-justify
		h4.fixAttrib.class.list = text-left, text-center, text-right, text-justify

		p.fixAttrib.class.list = text-left, text-center, text-right, text-justify

		ol.fixAttrib.class.list = list-unstyled, list-inline
		ul.fixAttrib.class.list = list-unstyled, list-inline

		a.fixAttrib.class.list = btn, btn-default

		hr.allowedAttribs = 0
		b.allowedAttribs = 0
		strong.allowedAttribs = 0
		i.allowedAttribs = 0
		em.allowedAttribs = 0
		u.allowedAttribs = 0
		strike.allowedAttribs = 0
		del.allowedAttribs = 0
		big.allowedAttribs = 0
		small.allowedAttribs = 0
		sup.allowedAttribs = 0
		sub.allowedAttribs = 0
		li.allowedAttribs = 0
		blockquote.allowedAttribs = 0
		code.allowedAttribs = 0
		thead.allowedAttribs = 0
		tbody.allowedAttribs = 0
		tfoot.allowedAttribs = 0
		div.allowedAttribs = 0

		h1.allowedAttribs = class
		h2.allowedAttribs = class
		h3.allowedAttribs = class
		h4.allowedAttribs = class
		p.allowedAttribs = class
		ol.allowedAttribs = class
		ul.allowedAttribs = class
		a.allowedAttribs = class, href, title, target
		tr.allowedAttribs = class
		th.allowedAttribs = class
		td.allowedAttribs = class
	}

	keepNonMatchedTags = 1
}

// Processing HTMLparser_db
RTE.default.proc.HTMLparser_db = 1
RTE.default.proc.HTMLparser_db {

	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	noAttrib = br
}

// Processing exitHTMLparser_db
RTE.default.proc.exitHTMLparser_db = 1
RTE.default.proc.exitHTMLparser_db {

	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	tags {
		b.remap = strong
		i.remap = em
		strike.remap = del
	}
	keepNonMatchedTags = 1
	htmlSpecialChars = 0
}

// Processing entryHTMLparser_rte
RTE.default.proc.entryHTMLparser_rte = 1
RTE.default.proc.entryHTMLparser_rte {

    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

	tags {
		strong.remap = b
		em.remap = i
		del.remap = strike
	}
    keepNonMatchedTags = 1
    htmlSpecialChars = 0
}

// Processing HTMLparser_rte
RTE.default.proc.HTMLparser_rte = 1
RTE.default.proc.HTMLparser_rte {

	allowTags < RTE.default.allowedTags
	denyTags < RTE.default.proc.denyTags

	keepNonMatchedTags = 1
	htmlSpecialChars = 0
}

// Use processing rules in frontent
RTE.default.FE < RTE.default

// Cleanup config for tt_content
RTE.config.tt_content.bodytext >

// Set wordclean parser
RTE.default.enableWordClean = 1
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db
