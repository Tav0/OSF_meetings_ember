import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('submission-eval');
    },
    // submission: null,
    // total: Ember.computed.sum('submission.sda', submission.asd',)

    actions: {
        saveEvaluation(newEval) {
            let router = this;

            if ((document.getElementById('premise').value >= 0) &&
                (document.getElementById('premise').value <= 15) && 
                (document.getElementById('research').value >= 0) &&
                (document.getElementById('research').value <= 15) &&
                (document.getElementById('style').value >= 0) &&
                (document.getElementById('style').value <= 15)) {
                
                newEval.save().then(function() {                
                    document.getElementById('submitAlert').className = 
                    "alert-success alert fade in";

                    setTimeout(function() {
                        router.transitionTo('reviews');
                    }, 2000);
                });
            }
        },

    }
});


// {{evaluation submission=model}}\

// {{submission.}}
// {{total}}