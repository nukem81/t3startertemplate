<?php

unset($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['clearAllCache_additionalTables']['tx_realurl_pathcache']);

$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= ',tx_realurl_pathsegment,alias,title';
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']=array(
	'_DEFAULT' => array(
		'init' => array(
			'enableCHashCache' => true,
			'appendMissingSlash' => 'ifNotFile,redirect',
			'adminJumpToBackend' => true,
			'enableUrlDecodeCache' => true,
			'enableUrlEncodeCache' => true,
			'emptyUrlReturnValue' => '/',
			'postVarSet_failureMode' => '',
			'reapplyAbsRefPrefix' => true,
		),
		'redirects' => array(),
		'redirects_regex' => array(),		
		'preVars' => array(
			array(
				'GETvar' => 'no_cache',
				'valueMap' => array(
					'no_cahce' => '1',
				),
				'noMatch' => 'bypass',
			),
			array(
				'GETvar' => 'L',
				'valueMap' => array(
					'' => '0',
					'fr' => '1',
					'de' => '2',
				),
				'noMatch' => 'bypass',
			),
		),
		'pagePath' => array(
			'type' => 'user',
			'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
			'spaceCharacter' => '-',
			'languageGetVar' => 'L',
			'rootpage_id' => '1',
			'segTitleFieldList' => 'tx_realurl_pathsegment,alias,title',
			'expireDays' => 7,
		),
		'fixedPostVars' => array(),		
		'postVarSets' => array(),
		'fileName' => array(
			'defaultToHTMLsuffixOnPrev' => 0,
			'acceptHTMLsuffix' => 1,
			'index' => array(
				'print.html' => array(
					'keyValues' => array(
						'type' => 98,
					),
				),
			),
		),

	),
);

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT']['pagePath']['rootpage_id'] = 1;

/*
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DOMAINS'] = array(
	'encode' => array(
		array(
			'GETvar' => 'L',
			'value' => '0',
			'useConfiguration' => 'example.com',
			'urlPrepend' => 'http://example.com'
		),
		array(
			'GETvar' => 'L',
			'value' => '1',
			'useConfiguration' => 'example.com',
			'urlPrepend' => 'http://example.com.tw'
		),
		array(
			'GETvar' => 'L',
			'value' => '2',
			'useConfiguration' => 'example.com',
			'urlPrepend' => 'http://example.com.cn'
		),
	),
	'decode' => array(
		'example.com' => array(
			'GETvars' => array(
				'L' => '0',
			),
			'useConfiguration' => 'example.com'
		),
		'example.com.tw' => array(
			'GETvars' => array(
				'L' => '1',
			),
			'useConfiguration' => 'example.com'
		),
		'example.com.cn' => array(
			'GETvars' => array(
				'L' => '2',
			),
			'useConfiguration' => 'example.com'
		),
	)
);
*/
