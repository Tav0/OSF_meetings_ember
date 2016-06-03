import Ember from 'ember';

export default Ember.Controller.extend({
  meetingTitle: 'Meeting Title',
  isRenaming: false,
  actions: {
    rename() {
      this.set('isRenaming', true);
    },
    saveName() {
      this.set('name',Ember.get(this,'meetingTitle'));
      this.set('isRenaming',false);
    }
  }
});


