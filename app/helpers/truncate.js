import Ember from 'ember';

export function truncate(params) {

  var x = params[0]*params[1]/100;
  return Math.round(x);
}

export default Ember.Helper.helper(truncate);
