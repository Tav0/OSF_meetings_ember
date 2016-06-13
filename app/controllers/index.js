import Ember from 'ember';

export default Ember.Controller.extend({
<<<<<<< HEAD
    titleError: false,
    clickedCreate: false,
=======
    vehicleIndex: 0,

>>>>>>> 750b74384319628afcb5ff1f8d1bf39060101229
    visited: false,
    actions: {
        create() {
            this.transitionToRoute('register').then(function(newRoute) {
              newRoute.controller.set('access', true);
            });
<<<<<<< HEAD
          } else {
            this.set('titleError',true);
          }
=======
>>>>>>> 750b74384319628afcb5ff1f8d1bf39060101229
        }
    }
});
