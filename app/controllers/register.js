import Ember from 'ember';

export default Ember.Controller.extend({
  access: false,
  previewOn: false,

  isValidTitle: (Ember.computed.match('model.title', /.+/)),
  isValidCity: Ember.computed.match('model.city', /.+/),
  isValidState: Ember.computed.match('model.state', /.+/),
  isValidCountry: Ember.computed.match('model.country', /...+/),
  isValidDescription: Ember.computed.match('model.description', /.+/),
  isAmerica: Ember.computed.match('model.country', /(USA)/),

  isInvalidTitle: false,
  isInvalidCity: false,
  isInvalidState: false,
  isInvalidCountry: false,
  isInvalidDates: false,
  isInvalidSubmissionDates: false,
  isInvalidDescription: false,
  isValid: true,

  visited: false,

  countries: ["", "United States of America (USA)", "Afghanistan", "Albania", "Algeria", "Andorra",
              "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria",
              "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
              "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
              "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
              "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
              "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", 
              "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
              "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", 
              "France", "Gabon", "Gambia, The", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
              "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hong Kong",
              "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
              "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", 
              "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
              "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", 
              "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
              "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", 
              "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Zealand", 
              "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau",
              "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
              "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
              "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
              "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
              "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
              "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
              "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
              "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
              "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", 
              "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
              ],

  actions: {
    selectCountry(country) {
      this.set('model.country', country);
    },

    create(newMeeting){
      this.set('isValid',true);
      this.set('isInvalidTitle', false);
      this.set('isInvalidCity',false);
      this.set('isInvalidState',false);
      this.set('isInvalidCountry',false);
      this.set('isInvalidDescription',false);
      if (document.getElementById('title').value.length === 0) {
        this.set('isInvalidTitle',true);
        this.set('isValid',false);
      }
      if (document.getElementById('city').value.length === 0) {  
        this.set('isInvalidCity',true);
        this.set('isValid',false);
      }
      if (document.getElementById('state').value.length === 0 && this.get('model.country') === "United States of America (USA)") {
        this.set('isInvalidState',true);
        this.set('isValid',false);
      }
      if ((this.get('model.country') === "") || (this.get('model.country') === undefined)) {
        this.set('isInvalidCountry',true);
        this.set('isValid',false);
      }
      if (document.getElementById('startDate').value > document.getElementById('endDate').value) {
        this.set('isInvalidDates',true);
        this.set('isValid',false);
      }
      if (document.getElementById('submissionDate').value > document.getElementById('closeDate').value) {
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
    },
    preview() {
      this.set('isValid',true);
      this.set('isInvalidTitle', false);
      this.set('isInvalidCity',false);
      this.set('isInvalidState',false);
      this.set('isInvalidCountry',false);
      this.set('isInvalidDescription',false);
      if (document.getElementById('title').value.length === 0) {
        this.set('isInvalidTitle',true);
        this.set('isValid',false);
      }
      if (document.getElementById('city').value.length === 0) {  
        this.set('isInvalidCity',true);
        this.set('isValid',false);
      }
      if (document.getElementById('state').value.length === 0 && this.get('model.country') === "United States of America (USA)") {
        this.set('isInvalidState',true);
        this.set('isValid',false);
      }
      if ((this.get('model.country') === "") || (this.get('model.country') === undefined)) {
        this.set('isInvalidCountry',true);
        this.set('isValid',false);
      }
      if (document.getElementById('startDate').value > document.getElementById('endDate').value) {
        this.set('isInvalidDates',true);
        this.set('isValid',false);
      }
      if (document.getElementById('submissionDate').value > document.getElementById('closeDate').value) {
        this.set('isInvalidSubmissionDates',true);
        this.set('isValid',false);
      }
      if (document.getElementById('description').value.length === 0) {
        this.set('isInvalidDescription',true);
        this.set('isValid',false);
      }
      if (this.get('isValid')) {
        this.set('previewOn',true);
      }
    },
    previewOff() {
      this.set('previewOn',false);
    }
  },

  

  
});

