import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  	premise: attr(0),
  	research: attr(0),
  	style: attr(0),

	total: Ember.computed('premise', 'research', 'style', function() {
		// debugger;
		return (parseInt(this.get('premise')) || 0) + (parseInt(this.get('research')) || 0) + (parseInt(this.get('style')) || 0);
	}),
});