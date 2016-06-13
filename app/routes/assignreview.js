import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('reviewer');

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
