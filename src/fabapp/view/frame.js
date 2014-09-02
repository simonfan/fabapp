define(function defFrameView(require, exports, module) {

	var view = require('fabapp/view/base');

	var frameView = view.extend({
		initialize: function initializeFrameView(options) {
			view.prototype.initialize.call(this, options);
		},

		navigate: function navigate(route) {

		},
	});

	module.exports = frameView;
});
