
import OsfModel from 'ember-osf/models/node';
import DS from 'ember-data';
import attr from 'ember-data/attr';


export default OsfModel.extend({
	conference: DS.belongsTo('conference'),
	//tags: attr('array'),
});
