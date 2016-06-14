import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	title: attr('string'), 
	contributors: attr('string'), 
	description: attr('string'), 
	keywords: attr('array'),
	category: attr('string'), // this is field is required for api v2 (should be project)
});
