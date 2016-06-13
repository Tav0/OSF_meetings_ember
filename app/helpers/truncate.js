import Ember from 'ember';

export function truncate(params, hash) {
  var value = params[0];
  var len = hash.limit;
  var dots = hash.dots;
  var out = '';

  if (value !== undefined) {
    out = value.substr(0, len);

    if (value.length > len && dots) {
      out += '...';
    }
    else if (value.length > len)
    {
      return out;
    }

  } else {
    out = '';
  }

  return out;
}

export default Ember.Helper.helper(truncate);
