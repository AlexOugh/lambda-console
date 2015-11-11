define([
  'backbone.marionette',
  'baseApp',
  'hbs!../templates/user_buttons'
], function(
  Marionette,
  BaseApp,
  tmpl
) {
  return Marionette.ItemView.extend({
    tagName: 'span',
    template: tmpl,
    ui: {
      logout: 'a.logout'
    },
    events: {
      "click @ui.logout": function(e) {
        e.preventDefault();
        //var apiUrl = BaseApp.config.apiUrl;
        //window.location = apiUrl+'/logout?next='+window.location.href;
      }
    }

  });
});
