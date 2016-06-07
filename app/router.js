import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conference', { path: '/conference/:id' }, function() {
  	this.route('index', { path: '/' });
    this.route('submission');
  });
  this.route('register');
  this.route('login');
});

export default Router;
