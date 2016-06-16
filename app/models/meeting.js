import Model from 'ember-data/model';
import DS from 'ember-data';
import attr from 'ember-data/attr';
import Collection from './collection';

export default Collection.extend({
  website: attr('string'),
  city: attr('string'),
  state: attr('string'),
  country: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),
  submissionDate: attr('date'),
  closeDate: attr('date'),
  logo: attr(),
  tags: attr(),
  sponsors: attr('array'),
  description: attr('string'),
  author: attr('string'),
  editing: attr()
});
