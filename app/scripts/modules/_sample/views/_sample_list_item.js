define([
  'backbone.marionette',
  '../models/_sample',
  '../../default/singletons/session',
  'hbs!../templates/_sample_list_item'
], function(
  Marionette,
  Model,
  session,
  tmpl
) {
  return Marionette.ItemView.extend({
    tagName: 'tr',
    template: tmpl,
    session: session,
    ui: {
      row: 'tr'
    },
    modelEvents: {
      'sync': 'render'
    },
    events: {
    },
    onBeforeShow: function() {
      var self = this;
    },
    onShow: function() {
      this.$el.foundation('reveal','init');
    }
  });
});
