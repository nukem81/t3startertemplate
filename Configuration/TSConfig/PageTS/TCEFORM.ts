// TCEFORM
TCEFORM {
	pages {
		layout {
			removeItems = 1,2,3
		}
    }

	tt_content {
		header_layout {
			altLabels {
				1 = H1
				2 = H2
				3 = H3
				4 = H4
				5 = H5
			}
		}

		layout {
			removeItems = 1,2,3
			disableNoMatchingValueElement = 1
			types {
				bullets {
					removeItems = 0,1,2,3
					addItems {
						100 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.bullets.layout.unordered
						110 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.bullets.layout.ordered
						120 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.bullets.layout.unstyled
						130 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.bullets.layout.inline
					}
				}		
				table {
					removeItems = 0,1,2,3
					addItems {
						100 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.table.layout.basic
						110 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.table.layout.striped
						120 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.table.layout.bordered
						130 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.table.layout.hover
						140 = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:tt_content.table.layout.condensed						
					}
				}
			}
		}

		imagecols {
			removeItems = 5,7,8
		}

		imageorient {
			removeItems = 1,2,9,10
		}

		section_frame {
			keepItems = 66
			disableNoMatchingValueElement = 1
		}

		imageheight {
			types {
				textpic.disabled = 1
				image.disabled = 1
			}
		}

		imagewidth {
			types {
				textpic.disabled = 1
				image.disabled = 1
			}
		}

		table_bgColor.disabled = 1
		table_border.disabled = 1
		table_cellspacing.disabled = 1
		table_cellpadding.disabled = 1
		pi_flexform {
			table {
				sDEF {
					acctables_nostyles.disabled = 1
					acctables_tableclass.disabled = 1
				}
			}
		}
	}
}
