// PAGE Configuration
page = PAGE
page {
	typeNum = 0

	headerData {
		10 = FLUIDTEMPLATE
		10 {
			templateName = Favicons
			templateRootPaths {
				100 = EXT:t3startertemplate/Resources/Private/Templates/Header/
				110 = {$t3startertemplate.fluidtemplate.headerRootPath}
			}
		}

		20 = HMENU
		20 {
			special = browse
			special {
				items = prev|next
			}
			1 = TMENU
			1.NO {
				allWrap = <link rel="prev" href="|" /> |*| <link rel="next" href="|" />
				doNotLinkIt = 1
				stdWrap {
					typolink {
						parameter.data = field:uid
						useCacheHash = 1
						returnLast = url
					}
				}
			}
		}		
	}

    10 = FLUIDTEMPLATE
	10 {
		templateName = TEXT
		templateName.stdWrap.cObject = CASE
		templateName.stdWrap.cObject {

			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout
			
			pagets__default = TEXT
			pagets__default.value = Main

			pagets__sidebar = TEXT
			pagets__sidebar.value = Sidebar

			default = TEXT
			default.value = Main
			
		}

		templateRootPaths {
			0 = EXT:t3startertemplate/Resources/Private/Templates/Page/			
			1 = {$t3startertemplate.fluidtemplate.templateRootPath}
		}
		partialRootPaths {
			0 = EXT:t3startertemplate/Resources/Private/Partials/Page/
			1 = {$t3startertemplate.fluidtemplate.partialRootPath}
		}
		layoutRootPaths {
			0 = EXT:t3startertemplate/Resources/Private/Layouts/Page/
			1 = {$t3startertemplate.fluidtemplate.layoutRootPath}
		}

		variables {

			pageTitle = TEXT
			pageTitle.data = page:title

			siteTitle = TEXT
			siteTitle.data = TSFE:tmpl|setup|sitetitle

            pageClass < lib.pageClass

			contentMain < styles.content.get
			contentLeft < styles.content.getLeft
			contentRight < styles.content.getRight

		}

        stdWrap.replacement {
            1 {
                search = http://###BACKEND_URL###/
                replace.typolink {
                    parameter = typo3/
                    returnLast = url
                }
            }
            2 {
                search = ###CURRENTYEAR###
                replace {
                    data = date:U
                    strftime = %Y
                }
            }
            3 {
                search = ###SPACE###
                replace {
                    char = 32
                }
            }
        }		

	}	

    meta {
		viewport = {$t3startertemplate.meta.viewport}
		robots = {$t3startertemplate.meta.robots}
		google = {$t3startertemplate.meta.google}
		apple-mobile-web-app-capable = {$t3startertemplate.meta.apple-mobile-web-app-capable}
		
		description = {$t3startertemplate.meta.description}
		description {
			override.field = description
		}

		author = {$t3startertemplate.meta.author}
		author {
			override.field = author
		}

		keywords = {$t3startertemplate.meta.keywords}
		keywords {
			override.field = keywords
		}

		X-UA-Compatible = {$t3startertemplate.meta.compatible}
		X-UA-Compatible {
			attribute = http-equiv
		}

		og:title {
			attribute = property
			field = title
		}

		og:site_name {
			attribute = property
			data = TSFE:tmpl|setup|sitetitle
		}

		og:description = {$t3startertemplate.meta.description}
		og:description {
			attribute = property
			field = description
		}

		og:image {
			attribute = property
			stdWrap.cObject = FILES
			stdWrap.cObject {
				references {
					data = levelfield:-1, media, slide
				}
				maxItems = 1
				renderObj = COA
				renderObj {
					10 = IMG_RESOURCE
					10 {
						file {
							import.data = file:current:uid
							treatIdAsReference = 1
							width = 1280c
							height = 720c
						}
						stdWrap {
							typolink {
								parameter.data = TSFE:lastImgResourceInfo|3
								returnLast = url
								forceAbsoluteUrl = 1
							}
						}
					}
				}
			}
		}
	}	

	includeCSS {
		site = EXT:t3startertemplate/Resources/Public/Build/StyleSheets/styles.css
	}

	includeJSFooter {
		site = EXT:t3startertemplate/Resources/Public/Build/JavaScripts/main.js
	}

	includeJSFooterlibs {
		jQuery = https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
		jQuery {
			external = 1
			excludeFromConcatenation = 1
			disableCompression = 1
		}		
	}

	jsFooterInline {
		10 = COA
		10 {
			if {
				isTrue = {$t3startertemplate.tracking.google.trackingID}
			}
			10 = TEXT
			10.value (
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
				ga('create', '{$t3startertemplate.tracking.google.trackingID}', 'auto');
			)
			20 = TEXT
			20 {
				if {
					isTrue = {$t3startertemplate.tracking.google.anonymizeIp}
				}
				value (
					ga('set', 'anonymizeIp', true);
				)
			}

			90 = TEXT
			90.value (
				ga('send', 'pageview');
			)
		}
	}
}
