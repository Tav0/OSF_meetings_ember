import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let url = this.get('router.url');
	    let id = url.split('/')[2];
		let uploadURL = '/v2/nodes/' + id + '/files';
		console.log(uploadURL);
		return Ember.RSVP.hash({
	      newNode: this.store.createRecord('node'),
	      uploadURL: uploadURL

	    });
    },

	actions: {
		saveNodeSubmission(newNode){
			let url = this.get('router.url');
	    	let id = url.split('/')[2];
	    	let router = this;
	    	newNode.save().then(function(){
	    		router.transitionTo('conference.index', id);
	    	});
	    },
	    reloadModels: function(file, res) {
	      Ember.Logger.info('reloadModels', file, res);
	      this.refresh();
	    },
	}
});
