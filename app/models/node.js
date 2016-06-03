import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	title: attr('string'), 
	contributors: attr('string'), 
	description: attr('string'), 
	keywords: attr('array'),
});
