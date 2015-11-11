define([
  'backbone.marionette',
  '../singletons/session',
  './user_buttons',
  'hbs!../templates/header'
], function(
  Marionette,
  session,
  UserButtons,
  headerTmpl
) {
  return Marionette.LayoutView.extend({
    template: headerTmpl,
    model: session,
    /*regions: {
      user: ".user",
      accountsLink: "li.accounts div"
    },
    ui: {
      appRolesLink: "li.app_roles"
    },*/
    modelEvents: {
      sync: 'render'
    },
    onDomRefresh: function() {
      var self = this;
      /*this.getRegion('user').show(new UserButtons({
        model: this.model
      }));

      _sampleCollection = new _SampleCollection();*/
    }
  });
});
