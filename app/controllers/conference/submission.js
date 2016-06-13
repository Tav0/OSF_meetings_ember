import Ember from 'ember';

export default Ember.Controller.extend({

	isValidTitle: Ember.computed.match('model.newNode.title', /...+/),
 	isValidContributors: Ember.computed.match('model.newNode.contributors', /...+/),
 	isValidDescription: Ember.computed.match('model.newNode.description', /......+/),
 	isValid: Ember.computed.and('isValidTitle', 'isValidContributors', 'isValidDescription'),
    titleError: false,
 	contributorsError: false,
 	descriptionError: false,

 	actions: {
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
