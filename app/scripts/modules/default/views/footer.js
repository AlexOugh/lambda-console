define([
  'backbone.marionette',
  'hbs!../templates/footer'
], function(Marionette,footerTmpl) {
  return Marionette.ItemView.extend({
    template: footerTmpl,
    ui: {
    },
    triggers: {
    }
  });
});
