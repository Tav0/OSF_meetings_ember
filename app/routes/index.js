
import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  model() {
    //  return this.store.findAll('conference');
  },
  activate: function() {
    console.log(this.get('session'));
    Ember.$('body').addClass('hide-scroll');
    Ember.$('html').css({overflow: 'hidden'});
  },
  deactivate: function(){
    Ember.$('body').removeClass('hide-scroll');
    Ember.$('html').css({"overflow-y": 'scroll'});
  }
});
