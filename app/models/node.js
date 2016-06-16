
import OsfModel from 'ember-osf/models/node';
import DS from 'ember-data';
import attr from 'ember-data/attr';


export default OsfModel.extend({
	meeting: DS.belongsTo('meeting'),
	tags: attr('array'),
});
