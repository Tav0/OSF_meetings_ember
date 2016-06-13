import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  website: attr('string'),
  city: attr('string'),
  state: attr('string'),
  country: attr('string'),
  startDate: attr('date-django'),
  endDate: attr('date-django'),
  submissionDate: attr('date-django'),
  closeDate: attr('date-django'),
  logo: attr(),
  tags: attr('array'),
  description: attr('string')
});
