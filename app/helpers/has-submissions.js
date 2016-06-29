import Ember from 'ember';

export function hasSubmissions(params/*, hash*/) {
  var linkedNodes = params[0];
  var length = linkedNodes.get('length');
  return length > 0;
}

export default Ember.Helper.helper(hasSubmissions);
