import Ember from 'ember';

export function linkToOsf(params) {

  return "https://staging.osf.io/" + params;
}

export default Ember.Helper.helper(linkToOsf);
