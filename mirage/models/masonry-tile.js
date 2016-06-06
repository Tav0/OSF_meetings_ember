import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  filename: attr('string'),
  filetype: attr('string'),
  author: attr('string')
});
