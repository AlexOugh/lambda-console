define([
  'backbone.marionette',
  'hbs!../templates/empty'
], function(
  Marionette,
  tmpl
) {
  return Marionette.ItemView.extend({
    template: tmpl
  });
});
