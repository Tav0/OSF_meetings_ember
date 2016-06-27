import Ember from 'ember';

export default Ember.Controller.extend({


	editing: false,
	navModal: false,
	displayErrors: false,

	validations: {
		'model.title': {
		  length: {minimum: 3, maximum: 300, messages: {
		    tooShort: 'Please enter a longer title',
		    tooLong: 'Title exceeds limit of 300 characters'
		  }}
		},
		'model.description': {
		  length: {minimum: 6, maximum: 2000, messages: {
		    tooShort: 'Please enter a longer description',
		    tooLong: 'Description exceeds limit of 2000 characters'
		  }}
		},
		'model.country': {
		  exclusion: {in: ['-Select a country'], message: 'Please choose a country'}
		},
		'model.state': {
		  length: {minimum: 2, maximum: 100, messages: {
		    tooShort: 'Please enter a valid state',
		    tooLong: 'Please enter a valid state'
		  }}
		},
		'model.city': {
		  length: {maximum: 100, messages: {
		    tooLong: 'City name is too long'
		  }}
		},
		'model.startDate': {
		  datecheck: {messages: {
		    tooEarly: 'Start date must be before end date.'
		  }}
		},
		'model.submissionDate': {
		  datecheck: {messages: {
		    tooEarly: 'Start date must be before end date.'
		  }}
		}
	},
 	hasState: Ember.computed.match('model.state', /.+/),



 	countries: ["United States of America (USA)", "Afghanistan", "Albania", "Algeria", "Andorra",
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

		editConference() {
			this.set('editing',true);
		},	
		cancelEdits() {
			this.set('editing',false);
			this.set('displayErrors',false);
			this.store.findRecord('conference',this.get('model.id')).then(function(conference) {
				conference.rollbackAttributes();
			});
		},
		saveEdits(conferenceID) {
	      	if (this.get('isValid')) {
				var conference = this.store.peekRecord('conference', conferenceID);
				conference.save();
				this.set('editing',false);
				this.set('displayErrors',false);
			} else {
				this.set('displayErrors',true);
			}
		}
	}
});
