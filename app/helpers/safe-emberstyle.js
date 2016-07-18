import Ember from 'ember';

export function safeEmberstyle(params) {
   var x =  "background-color:"+params[0]+"; width:"+params[1]+"%";

  return new Ember.Handlebars.SafeString(x); 
}

export default Ember.Helper.helper(safeEmberstyle);
