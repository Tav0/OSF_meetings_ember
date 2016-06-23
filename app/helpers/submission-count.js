import Ember from 'ember';

export function submissionCount(params/*, hash*/) {
  var linkedNodes = params[0];
  return linkedNodes.get('length');
}

export default Ember.Helper.helper(submissionCount);
