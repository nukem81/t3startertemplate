<INCLUDE_TYPOSCRIPT: source=FILE:EXT:gridelements/ConfigurationTypoScript/setup.ts>

tt_content.gridelements_pi1 {
	10 =< lib.stdheader
}

tt_content.gridelements_pi1.20.10.setup {
	1 < lib.gridelements.defaultGridSetup
	1 {
		columns {
			0 < .default
			0 {
				
				preCObject = CASE
				preCObject {
					key.field = flexform_gridType
					cols-33-66 = TEXT
					cols-33-66 {
						value = <div class="col-md-4">
					}
					cols-66-33 = TEXT
					cols-66-33 {
						value = <div class="col-md-8">
					}
					cols-25-75 = TEXT
					cols-25-75 {
						value = <div class="col-md-3">
					}
					cols-75-25 = TEXT
					cols-75-25 {
						value = <div class="col-md-9">
					}
					default = TEXT
					default {
						value = <div class="col-md-6">
					}
				}
				wrap = |</div>
			}
			
			1 < .default
			1 {
				preCObject = CASE
				preCObject {
					key.field = flexform_gridType
					cols-33-66 = TEXT
					cols-33-66 {
						value = <div class="col-md-8">
					}
					cols-66-33 = TEXT
					cols-66-33 {
						value = <div class="col-md-4">
					}
					cols-25-75 = TEXT
					cols-25-75 {
						value = <div class="col-md-9">
					}
					cols-75-25 = TEXT
					cols-75-25 {
						value = <div class="col-md-3">
					}
					default = TEXT
					default {
						value = <div class="col-md-6">
					}
				}
				wrap = |</div>
			}
		}
		wrap = <div class="row">|</div>
	}
}