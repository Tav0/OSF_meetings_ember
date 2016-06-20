import Ember from 'ember';

export default Ember.Controller.extend({

    islistview : true,
    isgridview: false,
    actions: {
      openreview()
      {
        this.transitionToRoute('evaluation');
      },
      showlist(){

        this.set('islistview',true);
        this.set('isgridview',false);

      },

      showgrid(){
        this.set('islistview',false);
        this.set('isgridview',true);
        
      }
    }

});
