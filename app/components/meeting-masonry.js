import Ember from 'ember';



export default Ember.Component.extend({
    title: '',
    description: '',

    didInsertElement: function(){
        var amount = '';

        function scroll()
        {

          Ember.$('.tile').animate({
            scrollTop: 15
          }, 100, 'linear',function() {
            if (amount !== '') {
              console.log('MHMM OKAY YEAH');
              scroll();
            }
          });
        }


        Ember.$('.tile').hover(function() {
          amount += 10;
          scroll();
        }, function() {
          amount = '';
        });
      },

});
