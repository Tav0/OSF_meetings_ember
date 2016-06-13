import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		let url = this.get('router.url');
	    let id = url.split('/')[2];
		let uploadURL = '/v2/nodes/' + id + '/files';
		console.log(uploadURL);
		return Ember.RSVP.hash({
	      newNode: this.store.createRecord('node'),
	      uploadURL: uploadURL,
        meeting: this.store.find('meeting', id)

	    });
    },

	actions: {
	    reloadModels: function(file, res) {
	      Ember.Logger.info('reloadModels', file, res);
	      this.refresh();
	    },
	    saveNodeSubmission(newNode){
 			if ((document.getElementById('title').value.length >= 3) && 
 				(document.getElementById('contributors').value.length >= 3) &&
 				(document.getElementById('description').value.length >= 6)) {
				let url = this.get('router.url');
	    		let id = url.split('/')[2];
	    		let router = this;
	    		var controlReset = this.controllerFor('conference.submission');
	    		controlReset.send('reset');
	    		newNode.save().then(function(){
	    			router.transitionTo('conference.index', id);
	    		});
	    	}

	    	else {
	    		var controlErrors = this.controllerFor('conference.submission');
	    		controlErrors.send('displayErrors');
	    	}
	    }
	}
});
