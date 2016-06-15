import Ember from 'ember';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';

export default Ember.Controller.extend({

	actions: {
		edit() {
			this.set('model.meeting.editing',true);
			this.set('editing',true);
		},
		save() {
			this.set('model.meeting.editing',false);
			this.set('editing',false);
			this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
				meeting.save ();
			});
		},
		cancel() {
			this.set('model.meeting.editing',false);
			this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
				meeting.rollbackAttributes();
			});
		},
		isDirty() {
			console.log('we got here');
			return true;
		}
	}
});
