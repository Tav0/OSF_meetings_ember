import Ember from 'ember';

export default Ember.Controller.extend({

	isValidTitle: Ember.computed.match('model.newNode.title', /.+/),
 	isValidContributors: Ember.computed.match('model.newNode.contributors', /.+/),
 	isValidDescription: Ember.computed.match('model.newNode.description', /.+/),
 	isValid: Ember.computed.and('isValidTitle', 'isValidContributors', 'isValidDescription'),
 	isDisabled: Ember.computed.not('isValid')


});
