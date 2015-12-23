lib.pageClass = COA
lib.pageClass {

	10 = TEXT
	10 {
		field = alias // uid
		noTrimWrap = |page-||
	}

	20 = TEXT
	20 {
		data = level:1
		noTrimWrap = | pagelevel-||
	}

	30 = TEXT
	30 {
		data = TSFE:sys_language_uid
		noTrimWrap = | language-||
	}

	40 = TEXT
	40 {
		data = levelfield:-1, backend_layout_next_level, slide
		override.field = backend_layout
		noTrimWrap = | backendlayout-||
	}

	50 = TEXT
	50 {
		field = layout
		noTrimWrap = | layout-||
	}
}



lib.languageMenu = COA
lib.languageMenu {
	10 = HMENU
	10 {
		special = language
		special.value = 0,1,2
		special.normalWhenNoLanguage = 0
		1 = TMENU
		1 {
			NO = 1
			NO {
				linkWrap = <li>|</li>
				stdWrap.override = English || Dansk || Deutsch
				doNotLinkIt = 1
				stdWrap {
					typolink {
						parameter.data = page:uid
						additionalParams = &L=0 || &L=1 || &L=2
						ATagParams = hreflang="en-GB" || hreflang="da-DK" || hreflang="de-DE"
						addQueryString = 1
						addQueryString.exclude = L,id,cHash,no_cache
						addQueryString.method = GET
						useCacheHash = 1
						no_cache = 0
					}
				}
			}

			ACT < .NO
			ACT.linkWrap = <li class="active">|</li>

			USERDEF1 < .NO
			USERDEF1 {
				linkWrap = <li class="text-muted">|</li>
				stdWrap.typolink >
			}

			USERDEF2 < .ACT
			USERDEF2 {
				linkWrap = <li class="text-muted">|</li>
				stdWrap.typolink >
			}
		}
	}

	wrap = <ul id="language_menu" class="language-menu">|</ul>
}


lib.navigation = COA
lib.navigation {
    10 = HMENU
    10 {
        entryLevel = 0
        1 = TMENU
        1 {
			wrap = <ul class="nav navbar-nav navbar-main">|</ul>
			expAll = 1
			NO = 1
			NO {
				ATagTitle.field = abstract // description // title
				ATagBeforeWrap = 1
				linkWrap = |
				wrapItemAndSub = <li>|</li>
				wrapItemAndSub.override.cObject = COA
				wrapItemAndSub.override.cObject {
					if {
						value = 4
						equals.field = doktype
						isTrue = 1
						isTrue.if {
							value.data = TSFE:page|uid
							equals.field = shortcut
						}
					}

					10 = TEXT
					10.value = <li class="active">|</li>
				}
			}

			ACT < .NO
			ACT {
				wrapItemAndSub = <li class="active">|</li>
			}

			CUR < .ACT

			IFSUB < .NO
			IFSUB {
				doNotLinkIt = 1
				allWrap = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|<b class="caret"></b></a>
				wrapItemAndSub = <li class="dropdown">|</li>
			}

			ACTIFSUB < .IFSUB
			ACTIFSUB {
				wrapItemAndSub = <li class="active dropdown">|</li>
			}

			CURIFSUB < .ACTIFSUB
		}

		2 < .1
		2 {
			wrap = <ul class="dropdown-menu">|</ul>
			SPC = 1
			SPC {
				wrapItemAndSub = <li class="divider"></li><li class="dropdown-header">|</li>
			}

			IFSUB >
			ACTIFSUB >
			CURIFSUB >
		}
	}
}


lib.breadcrumb = COA
lib.breadcrumb {
	10 = HMENU
	10 {
		special = rootline
		special.range = 1|-1
		includeNotInMenu = 1
		1 = TMENU
		1 {
			target = _self
			wrap = <ol class="breadcrumb">|</ol>
			NO = 1
			NO {
				stdWrap.field = title
				ATagTitle.field = nav_title // title
				wrapItemAndSub = <li>|</li>
			}

			CUR = 1
			CUR {
				stdWrap.field = title
				doNotLinkIt = 1
				wrapItemAndSub = <li class="active">|</li>
				}
			}
		}
		stdWrap {
			required = 1
			wrap = <div class="breadcrumb-section hidden-xs hidden-sm"><div class="container">|</div></div>
		}
		if {
			value = {$page.theme.breadcrumbEnableLevel}
			value {
				insertData = 1
				prioriCalc = 1
				stdWrap.wrap = |-1
			}
			isGreaterThan {
			data = level
		}
	}
}


lib.carousel = COA
lib.carousel {
	5 = FILES
	5 {
		references.data = levelmedia:-1, slide
		renderObj = COA
		renderObj {
			10 = COA
			10 {
	
				5 = LOAD_REGISTER
				5.activeClass.cObject = TEXT
				5.activeClass.cObject.value = 
				5.activeClass.cObject.override = active
				5.activeClass.cObject.override.if.value.data = register:FILE_NUM_CURRENT
				5.activeClass.cObject.override.if.equals = 0

				10 = TEXT
				10.data = register:FILE_NUM_CURRENT
				10.dataWrap = <li data-target="#carousel-bootstrap" data-slide-to="|" class="bullet {register:activeClass}"></li>
				10.insertData = 1

				20 = RESTORE_REGISTER
			}
		}
		stdWrap.wrap = <div class="bullets-control"><ol class="carousel-indicators">|</ol></div>		
	}

	10 = FILES
	10 {
		references {
			data = levelmedia:-1, slide
		}
		renderObj = COA
		renderObj {
			
			10 = COA
			10 {
				
				5 = LOAD_REGISTER
				5.activeClass.cObject = TEXT
				5.activeClass.cObject.value = 
				5.activeClass.cObject.override = active
				5.activeClass.cObject.override.if.value.data = register:FILE_NUM_CURRENT
				5.activeClass.cObject.override.if.equals = 0

				10 = IMG_RESOURCE
				10.file.import.data = file:current:publicUrl
				10.stdWrap.wrap = <div class="item bg {register:activeClass}" style="background-image:url(|);">
				10.stdWrap.insertData = 1

				20 = TEXT
				20.data = file:current:description
				20.dataWrap = <div class="carousel-caption"><p>|</p></div></div>

				30 = RESTORE_REGISTER
			}
		}
		stdWrap.wrap = <div class="carousel-inner">|</div>
	}

	wrap = <div id="carousel-bootstrap" class="carousel slide">|</div>
}
