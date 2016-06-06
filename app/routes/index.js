import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { text: "Create Ember app" },
            { text: "Read Ember Igniter" },
            { text: "Master Ember" }
        ]
    }
});
