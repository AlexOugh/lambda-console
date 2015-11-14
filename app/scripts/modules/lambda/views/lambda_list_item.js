define([
  'backbone.marionette',
  '../models/lambda',
  '../../default/singletons/session',
  'hbs!../templates/lambda_list_item'
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
    modelEvents: {
      'sync': 'render'
    },
    ui: {
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
