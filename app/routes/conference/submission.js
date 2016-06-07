import Ember from 'ember';

export default Ember.Route.extend({

	model() {
    	return this.store.createRecord('node');
    },

	actions: {
		saveNodeSubmission(newNode){
			let url = this.get('router.url');
	    	let id = url.split('/')[2];
	    	let router = this;
	    	newNode.save().then(function(){
	    		router.transitionTo('conference.index', id);
	    	});
	    }
	}
});
