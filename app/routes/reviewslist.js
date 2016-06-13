import Ember from 'ember';

export default Ember.Route.extend({
  model(){

    return Ember.RSVP.hash({
      reviewsall: this.store.findAll('reviewslist'),
      reviewsdate: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.sortBy('reviewdeadline').reverse();
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


