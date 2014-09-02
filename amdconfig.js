require.config({
	urlArgs: 'bust=0.5117059689946473',
	baseUrl: '/src',
	paths: {
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		mocha: '../node_modules/mocha/mocha',
		should: '../node_modules/should/should',
		fabapp: 'fabapp',
		backbone: '../bower_components/backbone/backbone',
		'bb-rendered-view': '../bower_components/bb-rendered-view/built/bb-rendered-view',
		bbcv: '../bower_components/bbcv/built/bbcv',
		bbdv: '../bower_components/bbdv/built/bbdv',
		bbmv: '../bower_components/bbmv/built/bbmv',
		'jquery-selector-data-prefix': '../bower_components/jquery-selector-data-prefix/built/jquery-selector-data-prefix',
		jquery: '../bower_components/jquery/dist/jquery',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		'lowercase-backbone': '../bower_components/lowercase-backbone/built/lowercase-backbone',
		pipe: '../bower_components/pipe/built/pipe',
		qunit: '../bower_components/qunit/qunit/qunit',
		'requirejs-text': '../bower_components/requirejs-text/text',
		subject: '../bower_components/subject/built/subject',
		underscore: '../bower_components/underscore/underscore',
		q: '../bower_components/q/q'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
