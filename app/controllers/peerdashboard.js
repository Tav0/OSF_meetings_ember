import Ember from 'ember';

export default Ember.Controller.extend({
  isshowingcontact: false,
  isshowingapprove: false,
  selectvalue: 0,
  msgtemplate: '' +
  ' Dear Prof. Tom,\n\n' +
  'I am writing to inquiry about your submission for ASONAM 2016 entitled Analyzing patients health records (AS-213).\n'+
  'Academic Editor',

  actions: {
    contactauthor(){


    },
    approvebutton(){


    },
    svalue(v){

      this.set('selectvalue',v);
      console.log('hii');

    },
    showdata() {
      this.set('isshowingcontact', true);
    },

    hidedata()  {
      this.set('isshowingcontact', false);
    },
    showapprove() {
      this.set('isshowingapprove', true);
    },

    hideapprove(inp)  {
      if (inp === 'ok'){

      var target = document.getElementById('selectbasic');

      if (target.value == '2'){


        this.set('isshowingapprove', false);

        this.transitionToRoute('assignreview');

      }else{


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
