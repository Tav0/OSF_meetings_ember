import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
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
  description: attr('string'),
});
