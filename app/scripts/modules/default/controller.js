define([
  'backbone',
  './singletons/session',
  './views/header',
  './views/footer'
],
function(
  Backbone,
  session,
  HeaderView,
  FooterView
) {
  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      this.app = options.app;
      this.headerView = new HeaderView();
      this.footerView = new FooterView();
      //this.session = session;
      //this.session.fetch();
    },
    onRoute: function() {

    },
    pageSetup: function() {
      this.app.appLayout.header.show(this.headerView);
      this.app.appLayout.footer.show(this.footerView);
    }
  });

  return Controller;

});
