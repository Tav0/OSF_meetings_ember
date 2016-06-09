import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meeting');
  },
  actions:
  {
    scrollit(){

      Ember.$('#top').hide(2000, function() {
        Ember.$('#rule').css({position: "fixed", top: "100px"});
        Ember.$('#createButton').css({position: "fixed", top: "123px"});
        Ember.$('#meetings').addClass("spacer");
        Ember.$('#browse').css({position: "fixed"});
        Ember.$('#meetings').addClass("col-md-offset-3");

      });




      //Ember.$("html, body").animate({ scrollTop: 0 }, "slow");
    }
  }
});
