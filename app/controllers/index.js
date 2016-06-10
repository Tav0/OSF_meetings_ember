import Ember from 'ember';

export default Ember.Controller.extend({
    clickedCreate: false,
    vehicleIndex: 0,

    visited: false,

    vehicle: Ember.computed('vehicleIndex', function() {
        return this.get('vehicles')[this.get('vehicleIndex')];
    }),

    vehicles: [
        { name: 'option1', year: 1953 },
        { name: 'option2', year: 1952 }
    ],

    items: Ember.A([
        { name: 'Conference 1' },
        { name: 'Conference 2' },
        { name: 'Conference 3' }
    ]),
    actions: {
        create() {
            this.set('clickedCreate',true);
        }
    }
});
