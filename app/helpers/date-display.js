import Ember from 'ember';

export function dateDisplay(params/*, hash*/) {
	var date = params[0].toDateString();
	return date;
}

export default Ember.Helper.helper(dateDisplay);
