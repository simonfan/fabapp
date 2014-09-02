//     Fabapp
//     (c) simonfan
//     Fabapp is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module Fabapp
 */

define(function (require, exports, module) {
	'use strict';

	require('fabapp/view/display');


	var view    = require('fabapp/view/base'),
		display = require('fabapp/view/display');


	var fabapp = view.extend({
		initialize: function initializeFabapp(options) {

			this.displays = {};

			view.prototype.initialize.call(this, options);
		},

		template: require('text!fabapp/template.html')
	});

	fabapp.directive('display', function ($el, name) {
		this.displays[name] = display({
			el: $el[0],
			views: {
				item: require('fabapp/view/item'),
				list: require('fabapp/view/list')
			}
		});
	});

//	fabapp.directive('visualization', require('fabapp/visualization/index'));

	module.exports = fabapp;
});
