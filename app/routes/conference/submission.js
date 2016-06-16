import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

    model() {
        return this.store.createRecord('node', {
            tags: [],
        });
    },

    actions: {
        //saveNodeSubmission(newNode){
        saveNodeSubmission(newNode, title, contributors, description, tags){
            let models = this.modelFor('conference.index');
            console.log(tags);
            newNode.setProperties({
                title: title,
                description: description,
                category: 'project',
                meeting: models.meeting,
                tags: tags.toString(),
            });
            console.log(newNode);
          document.getElementById("fileSubmission").reset();
            
            newNode.save();
            this.transitionTo('conference.index', models.meeting.id);
        },

        filesUpload(dropzone) {
            console.log(dropzone);
        },
        cancel()
        {
          let models = this.modelFor('conference.index');
          this.transitionTo('conference.index', models.meeting.id);
        },
    }

//	model() {
//		let url = this.get('router.url');
//	    let id = url.split('/')[2];
//		let uploadURL = '/v2/nodes/' + id + '/files';
//		console.log(uploadURL);
//		return Ember.RSVP.hash({
//	      newNode: this.store.createRecord('node'),
//	      uploadURL: uploadURL,
//        meeting: this.store.find('meeting', id)
//
//	    });
//    },

//	actions: {
//	    saveNodeSubmission(title, description, [M EO[M#EOnewNode){
// 			if ((document.getElementById('title').value.length >= 3) &&
// 				(document.getElementById('contributors').value.length >= 3) &&
// 				(document.getElementById('description').value.length >= 6)) {
//				let url = this.get('router.url');
//	    		let id = url.split('/')[2];
//	    		let router = this;
//	    		var controlReset = this.controllerFor('conference.submission');
//	    		controlReset.send('reset');
//	    		newNode.save().then(function(){
//	    			router.transitionTo('conference.index', id);
//	    		});
//	    	}
//
//	    	else {
//	    		var controlErrors = this.controllerFor('conference.submission');
//	    		controlErrors.send('displayErrors');
//	    	}
//	    }
//	}
//>>>>>>> landing_app_v2
});
