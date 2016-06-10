import Ember from 'ember';

export default Ember.Controller.extend({
  isRenaming: false,
  access: false,
  isValidTitle: Ember.computed.match('model.title', /.+/),
  isValidCity: Ember.computed.match('model.city', /.+/),
  isValidState: Ember.computed.match('model.state', /.+/),
  isValidCountry: Ember.computed.match('model.country', /.+/),
  isValidDescription: Ember.computed.match('model.description', /.+/),
  isValid: Ember.computed.and('isValidCity', 'isValidState', 'isValidCountry', 'isValidTitle', 'isValidDescription'),
  isDisabled: Ember.computed.not('isValid'),
  visited: false,

  actions: {
    rename() {
      this.set('isRenaming', true);
    },
    saveName() {
      this.set('isRenaming',false);
    }

  },
});

