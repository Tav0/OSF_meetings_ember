import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conference');
  this.route('register');
  this.route('login');
  this.route('submission');
  this.route('reviews');
});

export default Router;
