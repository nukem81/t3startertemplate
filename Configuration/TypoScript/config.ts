// General config
config {

	doctype = html5
	htmlTag_setParams = none

	renderCharset = utf-8
	metaCharset = utf-8

	cache_period = 86400
	sendCacheHeaders = 0

	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	uniqueLinkVars = 1
	linkVars = L
	sys_language_uid = 0
	sys_language_overlay = 1
	sys_language_mode = content_fallback
	language = en
	locale_all = en_GB.utf8
	htmlTag_langKey = en
	htmlTag_dir = ltr  	
	
	prefixLocalAnchors = 0

	absRefPrefix = auto
	pageTitleFirst = 1
	no_cache = 0

	intTarget =
	extTarget =

	index_enable = 1
	index_externals = 1

	disablePrefixComment = 1

	removeDefaultJS = external
	inlineStyle2TempFile = 1
	minifyCSS = 1
	compressCss = 1
	concatenateCss = 1
	
	minifyJS = 1
	compressJs = 1
	concatenateJs = 1

	noScaleUp = 1

	cache_clearAtMidnight = 1

	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = (at)
	spamProtectEmailAddresses_lastDotSubst >
	

	headerComment = Website development by Marco Malagoli
}


[globalVar = TSFE:page|no_search = 1]
page.meta.robots = noindex,follow
[end]


// Language
[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = fr
config.locale_all = fr_CH.utf8
config.htmlTag_langKey = fr 
config.htmlTag_dir = ltr
[end]

[globalVar = GP:L = 2]
config.sys_language_uid = 2
config.language = de
config.locale_all = de_DE.utf8
config.htmlTag_langKey = fr 
config.htmlTag_dir = ltr
[end]
