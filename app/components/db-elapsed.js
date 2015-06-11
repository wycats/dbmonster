import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['elapsed-time'],
  classNameBindings: ['isLongTime:elapsed-long:elapsed-short'],
  isLongTime: function() {
    let time = this.get('time');
    if (time > 10) {
      return true;
    }
    return false;
  }.property('time'),
});
