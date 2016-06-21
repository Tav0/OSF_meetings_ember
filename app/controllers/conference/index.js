import Ember from 'ember';

export default Ember.Controller.extend({


	editing: false,
	navModal: false,

	isInvalidTitle: false,
  	isInvalidCity: false,
  	isInvalidState: false,
  	isInvalidCountry: false,
 	isInvalidDates: false,
 	isInvalidSubmissionDates: false,
 	isInvalidDescription: false,
 	isValid: true,
 	conferenceDates: '',


 	countries: ["-Select a country-", "United States of America (USA)", "Afghanistan", "Albania", "Algeria", "Andorra",
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
      		this.set('model.conference.country', country);
    	},

		edit() {
			this.set('editing',true);
		},	
		cancel() {
			this.set('editing',false);
			this.store.findRecord('conference',this.get('model.conference.id')).then(function(conference) {
				conference.rollbackAttributes();
			});
		},
		save() {
	      	this.setProperties({isValid: true, isInvalidTitle: false, isInvalidCountry: false, isInvalidState: false, isInvalidCity: false,
	      		isInvalidDescription: false, isInvalidDates: false, isINvalidSubmissionDates: false});
	      	if (this.get('model.conference.title') === "") {
	        	this.setProperties({isInvalidTitle: true, isValid: false});
	      	}
	      	if (this.get('model.conference.city') === "") {
	        	this.setProperties({isInvalidCity: true, isValid: false});
	      	}
	      	if (this.get('model.conference.state') === "" && this.get('model.conference.country') === "United States of America (USA)") {
	        	this.setProperties({isInvalidState: true, isValid: false});
	      	}
	      	if ((this.get('model.conference.country') === "-Select a country-") || (this.get('model.conference.country') === undefined)) {
	        	this.setProperties({isInvalidCountry: true, isValid: false});
	      	}
	      	if (this.get('model.conference.startDate') > this.get('model.conference.endDate')) {
	        	this.setProperties({isInvalidDates: true, isValid: false});
	      	}
	      	if (this.get('model.conference.submissionDate') > this.get('model.conference.closeDate')) {
	        	this.setProperties({isInvalidSubmissionDates: true, isValid: false});
	      	}
	      	if (this.get('model.conference.description') === "") {
	        	this.setProperties({isInvalidDescription: true, isValid: false});
	      	}
	      	if (this.get('isValid')) {
				this.set('editing',false);
				this.store.findRecord('conference',this.get('model.conference.id')).then(function() {
					this.save();
				});
			}
		}
	}
});
