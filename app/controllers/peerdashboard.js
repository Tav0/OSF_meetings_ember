import Ember from 'ember';

export default Ember.Controller.extend({
  isshowingcontact: false,
  isshowingassign: false,
  isshowingform: false,
  islistview : true,
  isgridview: false,
  selectvalue: 0,
  rid: 0,
  msgtemplate: '' +
  ' Dear Prof. Tom,\n\n' +
  'I am writing to inquiry about your submission for ASONAM 2016 entitled Analyzing patients health records (AS-213).\n'+
  'Academic Editor',

  actions: {
    confirmHandler: function () {

    },
    contactauthor(){


    },
    approvebutton(){


    },
    svalue(v){

      this.set('selectvalue',v);


    },
    showdata() {
      this.set('isshowingcontact', true);
    },
    showform() {
      this.set('isshowingform', true);
    },
    hideform() {
      this.set('isshowingform', false);
    },
    hidedata()  {
      this.set('isshowingcontact', false);
    },
    showapprove(d) {


      this.store.findRecord('reviewslist', d).then(function(tyrion) {
        // ...after the record has loaded
        tyrion.set('status', "Approved for Review");

      });




    },
    showassign(d) {
      this.set('isshowingassign', true);

    },

    hideassign(inp)  {
      if (inp === 'ok'){

      var target = document.getElementById('selectbasic');

      if (target.value === '2'){


        this.set('isshowingassign', false);

        this.transitionToRoute('assignreview');

      }else{


        this.set('isshowingassign', false);
              }
      }else{

        this.set('isshowingassign', false);


      }

    },
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
