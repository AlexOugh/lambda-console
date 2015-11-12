define([
  'baseApp',
  'backbone',
  './collections/lambdas',
  './models/lambda',
  './views/lambda_list'
],
function(
  BaseApp,
  Backbone,
  LambdaCollection,
  LambdaModel,
  LambdaListView
) {

  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      this.app = options.app;
      this.module = options.module;
    },
    list: function() {
      this.app.appLayout.hideAside();
      this.lambdaCollection = new LambdaCollection();
      this.lambdaListView = new LambdaListView({
        collection: this.lambdaCollection
      });
      this.app.appLayout.section.show(this.lambdaListView);
    },
    onRoute: function() {
      var self = this;
      this.lambdaCollection.fetch({data:BaseApp.config.accounts[0]});
      this.lambdaCollection.on('error', function() {
      });
    }
  });

  return Controller;

});
