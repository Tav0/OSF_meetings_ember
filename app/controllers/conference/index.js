import Ember from 'ember';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';

export default Ember.Controller.extend({

	editing: false,

	isInvalidTitle: false,
  	isInvalidCity: false,
  	isInvalidState: false,
  	isInvalidCountry: false,
 	isInvalidDates: false,
 	isInvalidSubmissionDates: false,
 	isInvalidDescription: false,
 	isValid: true,

 	countries: ["", "United States of America (USA)", "Afghanistan", "Albania", "Algeria", "Andorra",
              "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria",
              "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
              "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
              "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada",
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
              "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
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
      		this.set('model.meeting.country', country);
    	},

		edit() {
			this.set('model.meeting.editing',true);
		},	
		cancel() {
			this.set('model.meeting.editing',false);
			this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
				meeting.rollbackAttributes();
			});
		},
		unload() {
	  		console.log('nice unload');
			this.store.findRecord('meeting',document.getElementById('meetingId').value).then(function(meeting) {
				meeting.rollbackAttributes();
				meeting.set('editing',false); 
			});
		},
		save() {
			this.set('isValid',true);
	      	this.set('isInvalidTitle', false);
	     	this.set('isInvalidCity',false);
	     	this.set('isInvalidState',false);
	      	this.set('isInvalidCountry',false);
	      	this.set('isInvalidDescription',false);
	      	this.set('isInvalidDates',false);
	      	this.set('isInvalidSubmissionDates',false);
	      	if (this.get('model.meeting.title') === "") {
	        	this.set('isInvalidTitle',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('model.meeting.city') === "") {  
	        	this.set('isInvalidCity',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('model.meeting.state') === "" && this.get('model.meeting.country') === "United States of America (USA)") {
	        	this.set('isInvalidState',true);
	        	this.set('isValid',false);
	      	}
	      	if ((this.get('model.meeting.country') === "") || (this.get('model.meeting.country') === undefined)) {
	        	this.set('isInvalidCountry',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('model.meeting.startDate') > this.get('model.meeting.endDate')) {
	        	this.set('isInvalidDates',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('model.meeting.submissionDate') > this.get('model.meeting.closeDate')) {
	        	this.set('isInvalidSubmissionDates',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('model.meeting.description') === "") {
	        	this.set('isInvalidDescription',true);
	        	this.set('isValid',false);
	      	}
	      	if (this.get('isValid')) {
				this.set('model.meeting.editing',false);
				this.store.findRecord('meeting',this.get('model.meeting.id')).then(function(meeting) {
					meeting.save ();
				});
			}
		}
	}
});
