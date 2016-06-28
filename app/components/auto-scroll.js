import Ember from 'ember';

export default Ember.Component.extend({
	didRender: function() {
        Ember.$('#indexTop').hide(0, function() {
          Ember.$('#indexBottom').css({"margin-top": "80px"});
          Ember.$('#tableContainer').css({"margin-top": "80px"});
          Ember.$('#create').addClass("navbar-fixed-top");
        });
	}
});
