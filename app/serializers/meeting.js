import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	serialize(snapshot, options) {
		var json = this._super(...arguments);

		json.data.type = "Meeting"

		return json;
	},
  	keyForAttribute: function(name) {
		return name ? Ember.String.camelize(name) : null;
	}
});
