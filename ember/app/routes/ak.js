import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return this.get('ajax').request('http://api.wunderground.com/api/1356b8cfa368573c/conditions/q/AK/Fairbanks.json');
  }
});
