import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  affiliation: attr('string'),
  bio: attr('string'),
  research: attr('string'),
  osfreviews: attr('string'),
  avatar: attr('string')
});
