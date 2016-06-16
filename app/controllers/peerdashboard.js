import Ember from 'ember';

export default Ember.Controller.extend({
  isshowingcontact: false,
  isshowingapprove: false,
  isshowingform: false,
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
      this.set('isshowingapprove', true);
      this.set('rid',d);
    },

    hideapprove(inp)  {
      if (inp === 'ok'){

      var target = document.getElementById('selectbasic');

      if (target.value === '2'){


        this.set('isshowingapprove', false);

        this.transitionToRoute('assignreview');

      }else{


        this.store.findRecord('reviewslist', this.get('rid')).then(function(tyrion) {
          // ...after the record has loaded
          tyrion.set('status', "Approved for Review");

        });




        this.set('isshowingapprove', false);
              }
      }else{

        this.set('isshowingapprove', false);


      }

    },
    openreview()
    {
      this.transitionToRoute('evaluation');
    }
  }

});
