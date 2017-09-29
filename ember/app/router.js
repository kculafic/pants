import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mn');
  this.route('il');
  this.route('wa');
  this.route('ak');
});

export default Router;
