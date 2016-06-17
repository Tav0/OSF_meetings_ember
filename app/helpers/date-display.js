import Ember from 'ember';

export function dateDisplay(params/*, hash*/) {
	var date = params[0].toString();
	var dateSplit = date.split(" ");
	var finalDate = dateSplit[0] + " " + dateSplit[1] + " " + dateSplit[2] + " " + dateSplit[3];
	return finalDate;
}

export default Ember.Helper.helper(dateDisplay);
