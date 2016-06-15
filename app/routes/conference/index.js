import Ember from 'ember';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';


export default Ember.Route.extend(ConfirmationMixin, {
	confirmationMessage: 'Your conference may have unsaved changes. Leaving will cancel unsaved changes.',
	editing: false,
  	isPageDirty() { 
		// let meeting = this.store.findRecord('meeting',document.getElementById('meetingId').value).then(function(meeting){
		// 	console.log('wtf');
		// });
		return this.get('editing');
		
	},
  	onUnload() {
  		this.set('model.meeting.editing',false);
		this.store.findRecord('meeting',document.getElementById('meetingId').value).then(function(meeting) {
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
 