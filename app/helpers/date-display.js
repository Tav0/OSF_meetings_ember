import Ember from 'ember';

export function dateDisplay(params/*, hash*/) {
	var date = new Date(params[0]);
	return date.toString();
}

export default Ember.Helper.helper(dateDisplay);
