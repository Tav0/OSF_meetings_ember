import Ember from 'ember';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(TaggableMixin, EmberValidations, {

	displayErrors: false,
    tagError: false,
    kill: true,

    validations: {
    	'model.title': {
    		length: {minimum: 3, maximum: 200, messages: {
    			tooShort: 'Please enter a valid title',
    			tooLong: 'Title exceeds limit of 200 characters'
    		}}
    	},
    	//TODO: Validation for contributors?
    	'model.description': {
    		length: {minimum: 6, maximum: 2000, messages: {
    			tooShort: 'Please enter a valid description',
    			tooLong: 'Description exceeds limit of 2000 characters.'
    		}}
    	}
    },

 	actions: {
 		// addATag(tag) {
   //          if (tag) {
   //              if (tag.length > 70)
   //                  this.set('tagError',true)
   //              else {
   //                  this.set('tagError',false);
 		// 	        this._super(tag);
   //              }
   //          }    
 		// },
        killSubmission() {
            if (this.get('kill'))
                this.get('model').destroyRecord();
        },
 		saveNodeSubmission(newNode, id) { //tags was previous passed as a parameter
            if (this.get('isValid')) {
                this.set('kill',false);
                newNode.setProperties({
                    category: 'project',
                    //tags: tags.toString(),
                });
                document.getElementById("fileSubmission").reset();
                var self = this;
                newNode.save().then(function() {
                    self.transitionToRoute('conference.index.index', id);
                });
            }
            else {
               this.set('displayErrors',true);
            }
        }
 	}
});
