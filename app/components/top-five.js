import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNameBindings: [':Query', 'query.classNAme']
});
