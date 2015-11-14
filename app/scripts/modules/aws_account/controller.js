define([
  'backbone',
  'baseApp',
  './collections/aws_accounts',
  './views/list'
],
function(
  Backbone,
  BaseApp,
  AwsAccountCollection,
  ListView
) {

  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      this.app = options.app;
      this.module = options.module;
      this.awsAccountCollection = new AwsAccountCollection();
    },
    list: function() {
      this.app.appLayout.hideAside();
      this.app.appLayout.section.show(new ListView({
        collection: this.awsAccountCollection
      }));
    },
    onRoute: function() {
      var self = this;

      //this.awsAccountCollection.fetch();
      BaseApp.config.accounts.forEach(function(account) {
        self.awsAccountCollection.push(account);
      });
    }
  });

  return Controller;

});
