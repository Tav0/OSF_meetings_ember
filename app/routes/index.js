import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	store: Ember.inject.service(),
	session: Ember.inject.service(),
  model() {
     return this.store.findAll('meeting');
  },
  activate: function() {
    Ember.$('body').addClass('hideScroll');
  },
  deactivate: function(){
    Ember.$('body').removeClass('hideScroll');
  }
});
