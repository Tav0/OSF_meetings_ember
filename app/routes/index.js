import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meeting');
  },
  actions: {
    scrollit(){
      Ember.$('#top').hide(2000, function() {
      });
    }
  }
});
