import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
        return Ember.RSVP.hash({
            nodes: this.store.findAll('node'),
            meeting: this.store.find('meeting', params.id),
        });
	}
});
