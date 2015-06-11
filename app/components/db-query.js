import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: ['Query'],
  classNameBindings: ['query.className'],
});
