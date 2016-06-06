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
<<<<<<< HEAD
  this.route('masonvview');
=======
>>>>>>> c5a16b61097c1b367bb4870a6eae195434602ee9
=======
>>>>>>> parent of 356cddb... factoring in masonry and new components
});

export default Router;
