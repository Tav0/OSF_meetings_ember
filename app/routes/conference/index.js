import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model(params) {
        return Ember.RSVP.hash({
        	meeting: this.store.find('meeting', params.id),
        });
	},

	actions: {
		back(){
			this.transitionTo('index').then(function(newRoute) {
		      	newRoute.controller.set('clickedCreate', false);
        		newRoute.controller.set('titleError', false);
        		newRoute.controller.set('visited', true);
			});
		}
	}
});
 