define(function defVisualizationView(require, exports, module) {

	var _ = require('lodash'),
		q = require('q'),
		$ = require('jquery');

	var view = require('fabapp/view/base');

	var viewDefinitionView = view.extend({

		initialize: function initializeVisualizationView(options) {

			// initialize base view
			view.prototype.initialize.call(this, options);

			// keep reference to data sources
		//	if (!options.dataSources) { throw new Error('No dataSources specified for display.'); }
			this.dataSources = options.dataSources;

			// hash on which to keep specialized views
			this.views = {};

		},

		template: '<div class="display">display</div>',

		/**
		 * Verifies if instance already exists.
		 * If so, returns the instnace.
		 * otherwise loads the module and instantiates the view.
		 *
		 * @param  {[type]} viewName [description]
		 * @return {[type]}          [description]
		 */
		retrieveViewInstance: function retrieveViewInstance(viewDefinition) {

			// create a deferred object
			var defer = q.defer();

			// viewDefinition is a model
			var viewModuleName = viewDefinition.get('view');

			// check if the view has already been instantiated
			if (this.views[viewModuleName]) {
				// resolve defer immediately
				defer.resolve(this.views[viewModuleName]);
			} else {

				// [1] build view instantiation options object
				var viewOptions = viewDefinition.toJSON();
				// [1.1] create an element for the view
				viewOptions.el = $('<div class="display-wrapper"></div>').appendTo(this.$el)[0];

				// [2] load module
				require([viewModuleName], _.bind(function (viewModule) {

					// [2.1] instantiate
					var viewInstance = this.views[viewModuleName] = viewModule(viewOptions);

					// [2.2] resolve defer ASYNC
					defer.resolve(viewInstance);

				}, this));
			}

			// return promise always
			return defer.promise;

		},


		retrieveData: function retrieveData(viewDefinition) {

			var sourceDefinition = viewDefinition.get('data_source');



		},

		/**
		 * [activate description]
		 * @param  {[type]} viewDefinition [description]
		 * @return {[type]}               [description]
		 */
		visualize: function visualize(viewDefinition, dataDefinition) {

			// [1] async operations



			// [1.1] retrieve the view instance
			var viewInstanceRetrieval = this.retrieveViewInstance(viewDefinition);

			// [1.2] retrieve the data to be shown
			var dataRetrieval = this.retrieveData(dataDefinition);


			// [2] wait for both retrievals to be done
			//     then
			q.all([viewInstanceRetrieval, dataRetrieval])
				.then(function (viewInstance, data) {

					viewInstance.activate(data);

				});

		},

		activate: function activate(options) {

		},

		deactivate: function deactivate(options) {

		},
	});

	module.exports = viewDefinitionView;

});
