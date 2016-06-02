import Ember from 'ember';

const { RSVP, $ } = Ember;

export default Ember.Route.extend({
	model() {
		return RSVP.hash({
	      nodes: $.getJSON('/v2/nodes'),
	      node2: $.getJSON('/v2/nodes/2'),
	      node11: $.getJSON('/v2/nodes/11'),
    	}); 
	}
});
