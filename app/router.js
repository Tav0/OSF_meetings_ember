import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conference', { path: '/conference/:id' });
  this.route('register');
  this.route('login');
  this.route('submission');
});

export default Router;
