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
	    },
	    back() {
      		this.transitionTo('index').then(function(newRoute) {
        	newRoute.controller.set('visited', true);
      })
    }
  	}
});
