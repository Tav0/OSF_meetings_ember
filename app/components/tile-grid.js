import Ember from 'ember';

export default Ember.Component.extend({
  items: Ember.A([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ])
});
