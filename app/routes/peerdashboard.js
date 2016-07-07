import Ember from 'ember';

export default Ember.Route.extend({

  statusc : 0,
  model(){

    return Ember.RSVP.hash({
      reviewsall: this.store.findAll('reviewslist'),
      reviewsdate: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.sortBy('reviewdeadline').reverse();
      }),
      ncomplete: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','Completed').get('length')/reviewslist.get('length')*100;
      }),
      napprove: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','Approved').get('length')/reviewslist.get('length')*100;
      }),
      nprogress: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','In-progress').get('length')/reviewslist.get('length')*100;
      }),
      nrejected: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','Rejected').get('length')/reviewslist.get('length')*100;
      }),
      npast: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','Past due').get('length')/reviewslist.get('length')*100;
      }),
      nsubmit: this.store.findAll('reviewslist', {reload: true}).then(function (reviewslist) {
        return reviewslist.filterBy('status','Submitted').get('length')/reviewslist.get('length')*100;
      })

    });

  },



  actions: {


    tablecolor(mode){

      Ember.$("tr").each(function() {
        Ember.$this = Ember.$(this);
        var imps = Ember.$this.find(".st").text().trim();


        if (mode=='Completed'){


          Ember.$this.css('background-color', 'green');

        }else if(mode=='Passed Due'){

          Ember.$this.css('background-color', 'red');

        }else{
          Ember.$this.css('background-color', 'yellow');

        }

        // compare id to what you want
      });

    },

    treeEvent(){
      console.log(this.get('conferences'));

      Ember.$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
      Ember.$('.tree li.parent_li > span').on('click', function (e) {
        var children = Ember.$(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
          children.hide('fast');
          Ember.$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
          children.show('fast');
          Ember.$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
      });
    },
    filterdata(){

      Ember.$('#filter').keyup(function () {

        var rex = new RegExp(Ember.$(this).val(), 'i');
        Ember.$('.searchable tr').hide();
        Ember.$('.searchable2').hide();
        Ember.$('.searchable tr').filter(function () {
          return rex.test(Ember.$(this).text());
        }).show();
        Ember.$('.searchable2').filter(function () {
          return rex.test(Ember.$(this).text());
        }).show();

      });
    },
    dateColor(d){ //this action is not used now, but needed for future use.
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      if(dd<10) {
        dd='0'+dd;
      }

      if(mm<10) {
        mm='0'+mm;
      }

      today = new Date(mm+'/'+dd+'/'+yyyy);


      var date2 = new Date(d);
      var timeDiff = (date2.getTime() - today.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays >= 0 ){

        this.set('statusc',this.get('statusc')+1);

      }else{

        this.set('statusc',this.get('statusc')+0);


      }
      console.log(this.get('statusc'));

    }



  }
});
