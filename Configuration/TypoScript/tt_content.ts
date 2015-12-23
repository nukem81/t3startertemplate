// stdHeader
lib.stdheader {
	10 {
		1.dataWrap = <h1>|</h1>
		2.dataWrap = <h2>|</h2>
		3.dataWrap = <h3>|</h3>
		4.dataWrap = <h4>|</h4>
		5.dataWrap = <h5>|</h5>
	}
	stdWrap.dataWrap >
}

// parseFunc_RTE
lib.parseFunc_RTE {
	externalBlocks {
		blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs >
	}

	nonTypoTagStdWrap.encapsLines {
		addAttributes.P.class >
		addAttributes.P.class.setOnly >
	}
}

// Section frame
tt_content.stdWrap.prepend >
tt_content.stdWrap.innerWrap.cObject.66.10 >

tt_content.stdWrap.innerWrap.cObject.default < tt_content.stdWrap.innerWrap.cObject.66

// Bullets 
tt_content.bullets.20.dataWrap >
tt_content.bullets.20.dataWrap.cObject = CASE
tt_content.bullets.20.dataWrap.cObject {
	key.field = layout
	default = COA
	default {
		10 = TEXT
		10 {
			value = <ul
		}

		20 = COA
		20 {
			10 = TEXT
			10 {
				value = list
				required = 1
				noTrimWrap = || |
			}

			stdWrap {
				trim = 1
				noTrimWrap = | class="|"|
				required = 1
			}
		}

		30 = TEXT
		30 {
			value = >|</ul>
		}
	}

	110 =< tt_content.bullets.20.dataWrap.cObject.default
	110.10.value = <ol
	110.30.value = >|</ol>

	120 =< tt_content.bullets.20.dataWrap.cObject.default
	120.20.10.value = list list-unstyled
	
	130 =< tt_content.bullets.20.dataWrap.cObject.default
	130.20.10.value = list list-inline
}

// Table
tt_content.table.20.stdWrap.replacement {
	10 {
		search = class="contenttable
		replace = class="table
		replace.if.value = 100
		replace.if.equals.field = layout	
	}
	
	20 < .10
	20.replace = class="table table-striped
	20.replace.if.value = 110

	30 < .10
	30.replace = class="table table-bordered
	30.replace.if.value = 120

	40 < .10
	40.replace = class="table table-hover
	40.replace.if.value = 130

	50 < .10
	50.replace = class="table table-condensed
	50.replace.if.value = 140
}
