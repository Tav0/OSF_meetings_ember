import Ember from 'ember';

export default Ember.Controller.extend({
    vehicleIndex: 0,

    vehicle: Ember.computed('vehicleIndex', function() {
        return this.get('vehicles')[this.get('vehicleIndex')];
    }),

    vehicles: [
        {name: 'option1', year: 1953},
        {name: 'option2', year: 1952}
    ],
});
