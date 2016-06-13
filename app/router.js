import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conference', { path: '/conference' }, function() {
  	this.route('index', { path: '/:id' });
    this.route('submission', { path: '/:id/submission' });
  });
  this.route('register');
  this.route('login');
  this.route('reviews');
  this.route('evaluation');
  this.route('evalConfirmation');
  this.route('assignreview');
  this.route('reviewslist');
});

export default Router;
