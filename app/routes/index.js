import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	store: Ember.inject.service(),
	session: Ember.inject.service(),
  model() {
     return this.store.findAll('conference');
  },
  activate: function() {
    Ember.$('body').addClass('hide-scroll');
    Ember.$('html').css({overflow: 'hidden'});
  },
  deactivate: function(){
    Ember.$('body').removeClass('hide-scroll');
    Ember.$('html').css({"overflow-y": 'scroll'});
  }
});
