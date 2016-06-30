import attr from 'ember-data/attr';
import Collection from './collection';

export default Collection.extend({
  city: attr('string'),
  state: attr('string'),
  country: attr('string'),
  start: attr('date'),
  end: attr('date'),
  submissionStart: attr('date'),
  submissionEnd: attr('date'),
  description: attr('string'),
  siteUrl: attr('string'),
  logoUrl: attr('string'),
});
