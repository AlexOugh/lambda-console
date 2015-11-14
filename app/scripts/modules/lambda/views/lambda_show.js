define([
  'backbone.marionette',
  'baseApp',
  'hbs!../templates/lambda_show'
], function(
  Marionette,
  BaseApp,
  Tmpl
) {
  return Marionette.LayoutView.extend({
    template: Tmpl,
    regions: {
    },
    onBeforeShow: function() {
      var self = this;
    },
    onRender: function() {
      var self = this;
    }
  });
});
