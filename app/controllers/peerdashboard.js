

import Ember from 'ember';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  loadCurrentUser() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const token =
        this.get('session.data.authenticated.token');
      if (!Ember.isEmpty(token)) {
        return this.get('store').findRecord('user',
          'me').then((user) => {
          this.set('account', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  },


  docid:0,
  isshowingcontact: false,
  isshowingassign: false,
  isshowingform: false,
  filelink: '',
  islistview : true,
  isgridview: false,
  istreeview: false,
  selectvalue: 0,
  rid: 0,
  msgtemplate: '' +
  ' Dear Prof. Tom,\n\n' +
  'I am writing to inquiry about your submission for ASONAM 2016 entitled Analyzing patients health records (AS-213).\n'+
  'Academic Editor',

  actions: {
    confirmHandler: function () {

    },
    tablecolor(){


     /* Ember.$("tr").each(function() {
        Ember.$this = Ember.$(this);
        var imps = Ember.$this.find(".st").text().trim();

        console.log(imps);
        console.log('hii');

        if (mode=='Completed' && imps=='Completed'){


          Ember.$this.css('background-color', 'green');

        }else if(mode=='Passed Due' && imps=='Passed Due'){

          Ember.$this.css('background-color', 'red');

        }else if (imps == ''){

        }else{
          Ember.$this.css('background-color', 'yellow');

        }

        // compare id to what you want
      });*/

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
    showform(d) {
      this.set('isshowingform', true);
       this.set('filelink',d);
       console.log(d);
    },
    hideform() {
      this.set('isshowingform', false);
    },
    hidedata()  {
      this.set('isshowingcontact', false);
    },
    showapprove(d) {


     this.store.findRecord('reviewslist', d).then(function(record) {

         let title = record.get('title');
         let conference = record.get('conference');
         let reviewer = record.get('reviewer');
         let link = record.get('link');
          let attachment = record.get('attachment');

        record.set('status', "Approved");
        record.set('attachment',attachment);
        record.set('conference',conference);
        record.set('reviewer',reviewer);
        record.set('link',link);
        record.set('title',title);

        record.save();


      });

    },
    showassign(d) {
      this.set('isshowingassign', true);
      this.set('docid',d);
      console.log(this.get('loadCurrentUser()'));

    },

    hideassign(inp)  {
      if (inp === 'ok'){

      var target = document.getElementById('selectbasic');

      if (target.value === '2'){


        this.set('isshowingassign', false);

        this.transitionToRoute('assignreview',{queryParams: {submission_id: this.get('docid')}});

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
      this.set('istreeview',false);

    },

    showgrid(){
      this.set('islistview',false);
      this.set('isgridview',true);
      this.set('istreeview',false);

    },

    isInArray(value, array) {
        return array.indexOf(value) > -1;

    },

    showtree(){


      this.set('istreeview',true);
      this.set('isgridview',false);
      this.set('islistview',false);

    }
  }

});
