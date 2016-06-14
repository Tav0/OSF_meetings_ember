import Ember from 'ember';

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
      		this.set('model.country', country);
    	},

		edit() {
			this.set('editing',true);
		},
		save() {
			this.set('isValid',true);
	      	this.set('isInvalidTitle', false);
	     	this.set('isInvalidCity',false);
	     	this.set('isInvalidState',false);
	      	this.set('isInvalidCountry',false);
	      	this.set('isInvalidDescription',false);
	      	if (this.get('model.title') === "") {
	        	this.set('isInvalidTitle',true);
	        	this.set('isValid',false);
	        	console.log("test1");
	      	}
	      	if (this.get('model.city') === "") {  
	        	this.set('isInvalidCity',true);
	        	this.set('isValid',false);
	        	console.log("test2");
	      	}
	      	if (this.get('model.state') === "" && this.get('model.country') === "United States of America (USA)") {
	        	this.set('isInvalidState',true);
	        	this.set('isValid',false);
	        	console.log("test3");
	      	}
	      	if ((this.get('model.country') === "") || (this.get('model.country') === undefined)) {
	        	this.set('isInvalidCountry',true);
	        	this.set('isValid',false);
	        	console.log("test4");
	        	console.log(this.get('model.country'));
	      	}
	      	if (this.get('model.startDate') > this.get('model.endDate')) {
	        	this.set('isInvalidDates',true);
	        	this.set('isValid',false);
	        	console.log("test5");
	      	}
	      	if (this.get('model.submissionDate') > this.get('model.closeDate')) {
	        	console.log(document.getElementById('submissionDate').value);
	        	this.set('isInvalidSubmissionDates',true);
	        	this.set('isValid',false);
	        	console.log("test6")
	      	}
	      	if (this.get('model.description') === "") {
	        	this.set('isInvalidDescription',true);
	        	this.set('isValid',false);
	        	console.log("test7");
	      	}
	      	if (this.get('isValid')) {
				this.set('editing',false);
				console.log("test8")
			}

			console.log(this.get('isValid'));
		}
	}
});
