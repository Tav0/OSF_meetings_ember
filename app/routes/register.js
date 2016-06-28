import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('conference');
  },
  deactivate: function() {
    var controller = this.get('controller');
    controller.send('killConference');
    controller.set('kill',true);
  },
  actions: {
    back() {
      this.transitionTo('index').then(function(newRoute) {
        newRoute.controller.set('visited', true);
      });
    }
  }
});
