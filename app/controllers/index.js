import Ember from 'ember';

export default Ember.Controller.extend({
  tileview: true,

  columns: [
  {
    "propertyName": "title",
    "title": "Title"
  },
  {
    "propertyName": "city",
    "title": "City"
  },
  {
    "propertyName": "state",
    "title": "State"
  },
  {
    "propertyName": "country",
    "title": "Country"
  },
  {
    "propertyName": "author",
    "title": "Author"
  },
    {
      "propertyName": "startDate",
      "title": "Start Date"
    },
    {
      "propertyName": "endDate",
      "title": "End Date"
    },
    {
      "propertyName": "description",
      "title": "Description"
    }],

  visited: false,
  
  actions: {
    create() {
      this.transitionToRoute('register').then(function(newRoute) {
        newRoute.controller.set('access', true);
      });
    },
    actions: {
        create()
        {
            this.transitionToRoute('register').then(function(newRoute) {
              newRoute.controller.set('access', true);
            });
        },
      scrollit()
      {
        Ember.$('#top').hide(2000, function() {
          Ember.$('#bottom').css({"margin-top": "80px"});
          Ember.$('#create').addClass("navbar-fixed-top");
        });
      },
      tileView(){
        Ember.$('#tileButton').addClass('disabled');
        Ember.$('#listButton').removeClass('disabled');
        let shift = this;
        shift.set('tileview', true );
      },
      listView(){
        Ember.$('#listButton').addClass('disabled');
        Ember.$('#tileButton').removeClass('disabled');
        let shift = this;
        shift.set('tileview', false );
        }
      }
    }
  }
});
