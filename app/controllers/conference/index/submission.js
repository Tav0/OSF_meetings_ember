import Ember from 'ember';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';

export default Ember.Controller.extend(TaggableMixin, {
	access: false,

	isValidTitle: Ember.computed.match('title', /...+/),
 	isValidContributors: Ember.computed.match('contributors', /...+/),
 	isValidDescription: Ember.computed.match('description', /......+/),
 	isValid: Ember.computed.and('isValidTitle', 'isValidContributors', 'isValidDescription'),
    titleError: false,
 	contributorsError: false,
 	descriptionError: false,

 	init: function() {
 		if (this.get('access') === false)
 			this.transitionToRoute('conference.index.index');
 	},

 	actions: {
 		addATag(tag){
 			console.log(tag);
 			var resource = this.get('model.node');
            var currentTags = resource.get('tags').slice(0);
            Ember.A(currentTags);
            currentTags.pushObject(tag);
            resource.set('tags', currentTags);
            console.log(currentTags);
 		},
 		displayErrors(){
 			this.set("titleError", false);
 			this.set("contributorsError", false);
 			this.set("descriptionError", false);

 			if (!this.get("isValidTitle")) {
 				this.set("titleError", true);
 			}

 			if (!this.get("isValidContributors")) {
 				this.set("contributorsError", true);
 			}

 			if (!this.get("isValidDescription")) {
 				this.set("descriptionError", true);
 			}
 		},

 		reset() {
 			this.set("titleError", false);
 			this.set("contributorsError", false);
 			this.set("descriptionError", false);
 		}
 	}
});
