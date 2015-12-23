// Backend layout
mod {
	web_layout {
		BackendLayouts {
			default {
				title = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:backend_layout.default
				icon = EXT:t3startertemplate/Resources/Public/Build/Images/backend_layout.default.gif
				config {
					backend_layout {
						colCount = 1
						rowCount = 1
						rows {
							1 {
								columns {
									1 {
										name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:backend_layout.column.main
										colPos = 0
									}
								}
							}
						}
					}
				}
			}
			sidebar {
				title = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:backend_layout.sidebar
				icon = EXT:t3startertemplate/Resources/Public/Build/Images/backend_layout.sidebar.gif
				config {
					backend_layout {
						colCount = 2
						rowCount = 1
						rows {
							1 {
								columns {
									1 {
										name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:backend_layout.column.main
										colPos = 0
									}
									2 {
										name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:backend_layout.column.sidebar
										colPos = 2
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

