import Ember from 'ember';

import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';

export default Ember.Route.extend(ConfirmationMixin, {
	confirmationMessage: 'Your conference may have unsaved changes. Leaving will cancel unsaved changes.',
	//isPageDirty uses ember-onbeforeunload. onbefore unload overrides willTransition and uses onUnload() instead. Since onUnload() doesn't work, we will implement that later.
 //  	isPageDirty() { 
	// 	var controller = this.get('controller');
	// 	var meeting = controller.get('model.meeting'); 
	// 	return controller.get('model.meeting.editing');
	// },
	model(params) {
        return Ember.RSVP.hash({
            meeting: this.store.find('meeting', params.id) 
        });
	},
	actions: {
		back(){
			this.transitionTo('index').then(function(newRoute) {
        		newRoute.controller.set('visited', true);
			});			
		},
		willTransition: function() {
			var controller = this.get('controller');
			controller.send('cancel');
		} 
	}
});
 
