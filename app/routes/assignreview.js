import Ember from 'ember';

export default Ember.Route.extend({
queryParams: {submission_id: null},
model(){



    return Ember.RSVP.hash({
      reviewerall: this.store.findAll('reviewer'),
      reviewername: this.store.findAll('reviewer', {reload: true}).then(function (reviewer) {
        return reviewer.sortBy('name');
      }),
      revieweremail: this.store.findAll('reviewer', {reload: true}).then(function (reviewer) {


        return reviewer.sortBy('email');
      })
    });



  },
  activate: function() {

    var self = this;
    Ember.$.ajax({
      url: "http://localhost:8000/api/checklogin",
      dataType: 'json',
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: true
      }
    }).then(function(loggedIn) {
      if (loggedIn.data === 'false') {
        console.log('not logged in');
        self.transitionTo('login');
      }
    });
  },
  actions: {
    filterdata(){

      Ember.$('#filter').keyup(function () {

        var rex = new RegExp(Ember.$(this).val(), 'i');
        Ember.$('.searchable tr').hide();
        Ember.$('.searchable tr').filter(function () {
          return rex.test(Ember.$(this).text());
        }).show();

      });
    }


  }

});
