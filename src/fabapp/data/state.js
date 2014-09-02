define(function defStateModel(require, exports, module) {

	var improvedModel = require('improved-model');


	var stateModel = improvedModel.extend({

		defaults: {
			data_source: 'data_source_id',
			query: {},
			visualization: 'visualization_id'
		}
	});

});
