<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

// TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
	$_EXTKEY, 'Configuration/TypoScript',
	'TYPO3 Starter Template'
);

// Page TSConfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY .'/Configuration/TSConfig/PageTS/setup.ts">'
);

// User TSConfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY .'/Configuration/TSConfig/UserTS/setup.ts">'
 );
