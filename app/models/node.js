
import OsfModel from 'ember-osf/models/node';
import DS from 'ember-data';


export default OsfModel.extend({
	meeting: DS.belongsTo('meeting'),
});
