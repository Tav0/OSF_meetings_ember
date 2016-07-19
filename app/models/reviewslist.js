import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

  conference: attr('string'),
  title: attr('string'),
  reviewdeadline: attr('string'),
  reviewer: attr('string'),
  author_name: attr('string'),
  author_email: attr('string'),
  status: attr('string'),
  link: attr('string'),
  attachment: attr('string')

  });
