import Ember from 'ember';

export default Ember.Controller.extend({
    titleError: false,
    clickedCreate: false,
    visited: false,
    actions: {
        create() {
            this.set('clickedCreate',true);
        },
        continue() {
          var enteredTitle =  document.getElementById('title').value;
          if (enteredTitle.length > 0) {
            this.transitionToRoute('register').then(function(newRoute) {
              newRoute.currentModel.set('title',enteredTitle);
              newRoute.controller.set('access', true);
            });
          } else {
            this.set('titleError',true);
          }
        }
    }
});
