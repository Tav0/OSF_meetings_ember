import Ember from 'ember';

export function locationDisplay(params/*, hash*/) {
  var city = params[0];
  var state = params[1];
  var country = params[2];
  var location = "";

  if (country === "United States of America (USA)") {
  	location = city + ", " + state;
  }
  else if (state === "") {
  	location = city + ", " + country;
  }

  else {
  	location = city + ", " + state + ", " + country;
  }


  return location;
}

export default Ember.Helper.helper(locationDisplay);
