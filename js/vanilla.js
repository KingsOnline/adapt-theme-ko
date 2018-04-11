define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var ThemeBlock = require('theme/adapt-contrib-vanilla/js/theme-block');

	// Block View
	// ==========

	Adapt.on('pageView:postRender', function(){
		if (Adapt.contentObjects.length > 1) {
			$('.page-footer').remove();
		}
	});

	Adapt.on('blockView:postRender', function(view) {
		var theme = view.model.get('_theme');

		if (theme) {
			new ThemeBlock({
				model: new Backbone.Model({
					_themeBlockConfig: theme
				}),
				el: view.$el
			});
		}
	});
});
