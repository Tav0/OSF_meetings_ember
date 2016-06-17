import Ember from 'ember';

export default Ember.Controller.extend({
	//Checks if numbers entered in rubric are <= 15 and >= 0
	isValidPremise: Ember.computed.lte('model.premise', 15),
	isValidPremise: Ember.computed.gte('model.premise', 0),

	isValidResearch: Ember.computed.lte('model.research', 15),
	isValidResearch: Ember.computed.gte('model.research', 0),

	isValidStyle: Ember.computed.lte('model.style', 15),
	isValidStyle: Ember.computed.gte('model.style', 0),

	isValid: Ember.computed.and('isValidPremise', 'isValidResearch', 'isValidStyle'),
	//If isValid is false, disable the Submit button
	isDisabled: Ember.computed.not('isValid')


});