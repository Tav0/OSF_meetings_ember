import Ember from 'ember';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';


export default Ember.Route.extend(ConfirmationMixin, {
	confirmationMessage: 'Your conference may have unsaved changes. Leaving will cancel unsaved changes.',
  	isPageDirty() { 
  // 		var isDirty = false;
		// this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
		//  	if (meeting.get('editing'))
		//  		sDirty = true; 
		//  	});
		// return isDirty;

		//return this.get('model.meeting.editing');

		console.log(this.get('model.meeting'));
		return true;
		
	},
  	onUnload() { //THIS METHOD IS FUCKED BECAUSE IT NEVER GETS CALLED
  		this.set('model.meeting.editing',false);
		this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
			meeting.rollbackAttributes();
			meeting.set('title','Nice unload'); 
		});
	},
	model(params) {
        return Ember.RSVP.hash({
            nodes: this.store.findAll('node'),
            meeting: this.store.find('meeting', params.id) 
        });
	},

	actions: {
		back(){
			this.transitionTo('index').then(function(newRoute) {
        		newRoute.controller.set('visited', true);
			});
		}, 
	}
});
 