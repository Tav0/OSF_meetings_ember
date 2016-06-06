import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('conference');
  this.route('register');
  this.route('login');
  this.route('submission');
  this.route('masonvview');
=======
>>>>>>> c5a16b61097c1b367bb4870a6eae195434602ee9
});

export default Router;
