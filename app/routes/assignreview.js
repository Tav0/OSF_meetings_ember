import Ember from 'ember';

export default Ember.Route.extend({
  
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
  actions: {
    filterdata(){

      Ember.$('#filter').keyup(function () {

        var rex = new RegExp($(this).val(), 'i');
        $('.searchable tr').hide();
        $('.searchable tr').filter(function () {
          return rex.test($(this).text());
        }).show();

      });
    }

    
  }

});
