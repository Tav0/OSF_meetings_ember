import Ember from 'ember';

export default Ember.Route.extend({
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
