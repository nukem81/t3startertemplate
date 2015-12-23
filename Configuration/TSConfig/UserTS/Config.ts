// user TS config
options {

	RTESmallHeight = 800
	RTESmallWidth = 800

	clearCache.pages = 1
	clearCache.all = 1
	saveDocNew = 1
	saveDocNew.tt_content = 1
	saveDocNew.pages = 1

	saveClipboard = 0

	clipboardNumberPads = 1
}

setup.defaults {
	titleLen = 80
	thumbnailsByDefault = 1
	edit_RTE = 1
	copyLevels = 9
	recursiveDelete = 1
	noOnChangeAlertInTypeFields = 0
	navFrameWidth = 150
	startModule = web_list
}


mod.web_list {
	hideTables=static_template,static_countries,static_country_zones,static_currencies,static_languages,static_territories,static_taxes,static_markets
	itemsLimitSingleTable = 1000
	itemsLimitPerTable = 50
}