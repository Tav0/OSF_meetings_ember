import Ember from 'ember';

export default Ember.Component.extend({

	didRender: function() {
		Ember.$("#top").hide();	
	}
});
