import DS from 'ember-data';

export default DS.DateTransform.extend({
 
  serialize(deserialized) {
  	// %Y-%m-%d %H:%M:%S
  	// getMonth starts from 0
  	var deserializedDjango = ''.concat(deserialized.getFullYear(), '-', 
  		deserialized.getMonth() + 1, '-', deserialized.getDate(),' ', deserialized.getHours(), ':',
  		deserialized.getMinutes(), ':', deserialized.getSeconds());
  	console.log(deserializedDjango);
    return deserializedDjango;
  }
});
