import Ember from 'ember';

export default Ember.Route.extend({
  model() {
		return this.store.createRecord('meeting');
	},
	actions: {
	    create(newMeeting){
	    	var router = this;
	    	newMeeting.save().then(function(){
	    		router.transitionTo('index');
	    	});
	    }
  	}
});
