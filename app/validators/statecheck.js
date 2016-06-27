import Base from 'ember-validations/validators/base';
import Ember from 'ember';

export default Base.extend({
	init: function() {
		this._super();
		this.dependentValidationKeys.pushObject('model.country');
	},
	call: function() {
		if (this.model.get(this.property)) {
			if (this.model.get(this.property).length > 100) {
				this.errors.pushObject('State is too long');
			} else {
				if (this.model.get('model.country') === "United States of America (USA)") {
					if (this.model.get(this.property).length < 2) {
						this.errors.pushObject('Please enter a valid state');
					}
				}
			}
		} else if (this.model.get('model.country') === "United States of America (USA)") {
			this.errors.pushObject('Please enter a valid state');
		}
	}
});	