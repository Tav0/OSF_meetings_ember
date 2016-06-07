import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    //return this.store.findAll('node');

    return Ember.RSVP.hash({
        node: this.store.findAll('node'),
        meeting: this.store.find('meeting', params.id)
    });
  },

  setupController(controller, models) {
      controller.setProperties(models);
  }
});
