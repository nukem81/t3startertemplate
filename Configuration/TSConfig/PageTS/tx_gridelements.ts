// Grid Elements
tx_gridelements.setup {
	1 {
	title = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.title
	description = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.description
	config {
		colCount = 2
		rowCount = 1
		rows {
		1 {
			columns {
			1 {
				name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.leftColumn
				colPos = 0
			}
			2 {
				name = LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.rightColumn
				colPos = 1
			}
			}
		}
		}
	}
	icon = EXT:t3startertemplate/Resources/Public/Build/Images/tx_gridelements_TwoCols.png

	flexformDS (
			<T3DataStructure>
				<meta>
					<langDisable>1</langDisable>
				</meta>
				<ROOT type="array">
					<type>array</type>
					<el type="array">
					<gridType type="array">
						<TCEforms type="array">
						<label>LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType</label>
						<config type="array">
							<type>select</type>
							<items type="array">
							<numIndex index="0" type="array">
								<numIndex index="0">LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType.1-1</numIndex>
								<numIndex index="1">cols-50-50</numIndex>
							</numIndex>
							<numIndex index="1" type="array">
								<numIndex index="0">LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType.1-2</numIndex>
								<numIndex index="1">cols-33-66</numIndex>
							</numIndex>
							<numIndex index="2" type="array">
								<numIndex index="0">LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType.2-1</numIndex>
								<numIndex index="1">cols-66-33</numIndex>
							</numIndex>
							<numIndex index="3" type="array">
								<numIndex index="0">LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType.1-3</numIndex>
								<numIndex index="1">cols-25-75</numIndex>
							</numIndex>
							<numIndex index="4" type="array">
								<numIndex index="0">LLL:EXT:t3startertemplate/Resources/Private/Language/Backend.xlf:gridelements.1.gridType.3-1</numIndex>
								<numIndex index="1">cols-75-25</numIndex>
							</numIndex>
							</items>
						</config>
						</TCEforms>
					</gridType>
					</el>
				</ROOT>
			</T3DataStructure>
		)
	}
}