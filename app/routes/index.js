import Ember from 'ember';

const {RSVP} = Ember;

export default Ember.Route.extend({
    model() {
        return this.store.findAll('meeting');
    }
});
