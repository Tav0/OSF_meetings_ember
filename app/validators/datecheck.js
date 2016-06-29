import Base from 'ember-validations/validators/base';
import Ember from 'ember';

export default Base.extend({
	init: function() {
		this._super();

		//Also check validation when end date changes.
		if (this.property === 'model.startDate')
			this.dependentValidationKeys.pushObject('model.endDate');
		if (this.property === 'model.submissionDate')
			this.dependentValidationKeys.pushObject('model.closeDate');
	},
	call: function() {
	    var end;
		if (this.property === 'model.startDate')
			end = this.model.get('model.endDate');
		if (this.property === 'model.submissionDate')
			end = this.model.get('model.closeDate');
		if (this.model.get(this.property) > end)
			this.errors.pushObject('Start date must be before end date');
	}
});	