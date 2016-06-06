import Ember from 'ember';

export default Ember.Component.extend({

  model()
  {
    return Ember.RSVP.hash({
      "masonry-tile": this.store.findAll('masonry-tile')
    });
  },

  setupController(controller,models){
    controller.setProperties(models);
  }
});
