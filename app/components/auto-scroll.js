import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function() {
		//$(document).( $("#bottom").offset().top );
		Ember.$("#top").hide();	
	}
});
