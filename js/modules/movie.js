define(['backbone'], function(B) {
	var Model = B.Model.extend({
		defaults: {
			release: 2012
		}
	});

	var View = B.View.extend({
		tagName: 'li',
		template: _.template('<%= title %> (<strong><%= release %></strong>)'),
		initialize: function() {
			this.render();
		},
		render: function() {
			var html = this.template( this.model.toJSON() );
			this.$el.append(html);
		}
	});

	return {
		Model: Model,
		View: View
	};


})