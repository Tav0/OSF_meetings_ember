import Ember from 'ember';

export default Ember.Controller.extend({
  access: false,
  isValidTitle: (Ember.computed.match('model.title', /.+/)),
  isValidCity: Ember.computed.match('model.city', /.+/),
  isValidState: Ember.computed.match('model.state', /.+/),
  isValidCountry: Ember.computed.match('model.country', /.+/),
  isValidDescription: Ember.computed.match('model.description', /.+/),

  isInvalidTitle: false,
  isInvalidCity: false,
  isInvalidState: false,
  isInvalidCountry: false,
  isInvalidDates: false,
  isInvalidSubmissionDates: false,
  isInvalidDescription: false,
  isValid: true,

  visited: false,

  actions: {
    create(newMeeting){
      this.set('isValid',true);
      this.set('isInvalidCity',false);
      this.set('isInvalidState',false);
      this.set('isInvalidCountry',false);
      this.set('isInvalidDescription',false);
      if (document.getElementById('title').value.length === 0) {
        this.set('isInvalidTitle',true);
        this.set('isInvalid',false);
      }
      if (document.getElementById('city').value.length === 0) {  
        this.set('isInvalidCity',true);
        this.set('isValid',false);
      }
      if (document.getElementById('state').value.length === 0) {
        this.set('isInvalidState',true);
        this.set('isValid',false);
      }
      if (document.getElementById('country').value.length === 0) {
        this.set('isInvalidCountry',true);
        this.set('isValid',false);
      }
      if (document.getElementById('startDate').value > document.getElementById('endDate').value) {
        this.set('isInvalidDates',true);
        this.set('isValid',false);
      }
      if (document.getElementById('submissionDate').value > document.getElementById('closeDate').value) {
        console.log(document.getElementById('submissionDate').value)
        this.set('isInvalidSubmissionDates',true);
        this.set('isValid',false);
      }
      if (document.getElementById('description').value.length === 0) {
        this.set('isInvalidDescription',true);
        this.set('isValid',false);
      }
      if (this.get('isValid')) {
        var router = this;
          newMeeting.save().then(function(params){
            router.transitionToRoute('conference.index', params.id).then(function(newRoute) {
              newRoute.controller.set('visited', true);
          });
        });
      }
    }
  },

  

  
});

