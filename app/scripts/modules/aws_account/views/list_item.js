define([
  'backbone.marionette',
  '../models/aws_account',
  'hbs!../templates/list_item'
], function(
  Marionette,
  Model,
  tmpl
) {
  return Marionette.ItemView.extend({
    tagName: 'tr',
    template: tmpl,
    ui: {
      destroy: '.delete a'
    },
    modelEvents: {
      'sync': 'render'
    },
    events: {
      'click @ui.destroy': function(e) {
        e.preventDefault();
        var r = confirm("Are you sure?");
        if (r === true) {
          return this.model.destroy({wait:true});
        }
      }
    }
  });
});
