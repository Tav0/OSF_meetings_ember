import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service(),
    session: Ember.inject.service(),
});
