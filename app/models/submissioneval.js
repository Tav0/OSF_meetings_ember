

import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

  premise: attr('string'),
  research: attr('string'),
  style: attr('string'),
  comment: attr('string'),
  total: Ember.computed('premise', 'research', 'style', function() {
    return (parseInt(this.get('premise')) || 0) + (parseInt(this.get('research')) || 0) + (parseInt(this.get('style')) || 0);
  }),

});
