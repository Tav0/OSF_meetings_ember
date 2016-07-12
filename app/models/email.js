import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  from_email: attr('string'),
  to_email: attr('string'),
  message: attr('string'),
  subject: attr('string'),

});
