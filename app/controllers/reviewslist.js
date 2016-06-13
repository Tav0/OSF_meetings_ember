import Ember from 'ember';

export default Ember.Controller.extend({


    actions: {
      openreview()
      {
        this.transitionToRoute('evaluation');
      }
    }

});
