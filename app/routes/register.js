import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('meeting');
	},
	actions: {
<<<<<<< HEAD
	    create(newMeeting){
	    	var router = this;
	    	newMeeting.save().then(function(){
	    		router.transitionTo('conference', newMeeting.id);
	    	});
	    },
	    back(newMeeting) {
        var router = this;
	    	newMeeting.destroyRecord().then(function(){
          router.transitionTo('index').then(function(newRoute) {
        newRoute.controller.set('visited', true);
        });
      });
      }
  	}
=======
		back() {
			this.transitionTo('index').then(function(newRoute) {
				newRoute.controller.set('clickedCreate', false);
				newRoute.controller.set('titleError', false);
				newRoute.controller.set('visited', true);
			});
		}
	}
>>>>>>> 750b74384319628afcb5ff1f8d1bf39060101229
});
