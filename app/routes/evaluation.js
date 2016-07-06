import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('submissioneval');
    },
    // submission: null,
    // total: Ember.computed.sum('submission.sda', submission.asd',)

    actions: {
        saveEvaluation(newEval) {
            let router = this;
            if ((parseInt(document.getElementById('premise').value) >= 0) &&
                (parseInt(document.getElementById('premise').value) <= 15) &&
                (parseInt(document.getElementById('research').value) >= 0) &&
                (parseInt(document.getElementById('research').value) <= 15) &&
                (parseInt(document.getElementById('style').value) >= 0) &&
                (parseInt(document.getElementById('style').value) <= 15)) {

                newEval.save().then(function() {
                    document.getElementById('submitAlert').className =
                    "alert-success alert fade in";

                    setTimeout(function() {
                        router.transitionTo('reviewslist');
                    }, 2000);
                });  //, function() {
                    //error logic

                }else{
              document.getElementById('errorAlert').className =
                "alert-danger alert fade in";
              setTimeout(function() {
                document.location.reload();

              }, 2000);



            }
            },
        cancel(){
    let router = this;
    router.transitionTo('reviewslist');
  }
    },

});


// {{evaluation submission=model}}\

// {{submission.}}
// {{total}}
