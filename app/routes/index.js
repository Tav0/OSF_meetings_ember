import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meeting');
  },
<<<<<<< HEAD

  visited: false,

  actions:
  {

=======
  actions: {
>>>>>>> 11d6095c4e6a9a249021190aafc20120ac2610f0
    scrollit(){

      Ember.$('#top').hide(2000, function() {
        Ember.$('#meetings').addClass("spacer");
        Ember.$('#rule').css({position: "fixed", top: "70px"});
        Ember.$('#createButton').css({position: "fixed", top: "100px"});
        Ember.$('#browse').css({position: "fixed"});
        Ember.$('#meetings').addClass("col-md-offset-3");
      })
    },
    continue() {
      this.transitionTo('register').then(function(newRoute) {
        newRoute.currentModel.set('title', document.getElementById('title').value);
        newRoute.controller.set('access', true);
      })
    }
  }
});
