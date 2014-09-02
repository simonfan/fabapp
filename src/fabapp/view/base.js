define(function defBaseFabappView(require, exports, module) {

	// load jquery selector
	require('jquery-selector-data-prefix');

	var bbdv = require('bbdv');


	var baseFabappView = bbdv.extend({

		initialize: function initializeBaseFabappView(options) {

			this.views = {};

			bbdv.prototype.initialize.call(this, options);

		},

		namespace: 'app',

		selector: function baseFabappDirectiveSelector(namespace) {
			return ':data-prefix(' + namespace + ')';
		}
	});



	baseFabappView.directive('view', function ($el, modName) {


		var scope = this.scope ? _.create(this.scope) : {};
		scope.el = $el[0];

		require([modName], _.bind(function (mod) {
			this.views[$el.data('id')] = mod(scope);
		}, this));

	});


	module.exports = baseFabappView;
});
