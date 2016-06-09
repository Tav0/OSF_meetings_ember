import Ember from 'ember';

export default Ember.Controller.extend({
	//Checks if numbers entered in rubric are >= 15
	isValidPremise: Ember.computed.lte('model.premise', 15),
	isValidResearch: Ember.computed.lte('model.research', 15),
	isValidStyle: Ember.computed.lte('model.style', 15),
	isValid: Ember.computed.and('isValidPremise', 'isValidResearch', 'isValidStyle'),
	isDisabled: Ember.computed.not('isValid')


});
