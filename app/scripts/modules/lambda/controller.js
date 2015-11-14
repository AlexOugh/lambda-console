define([
  'jquery',
  'backbone',
  'baseApp',
  '../aws_account/models/aws_account',
  './collections/lambdas',
  './views/lambda_list',
  './models/lambda',
  './views/lambda_show',
  './views/aside'
],
function(
  $,
  Backbone,
  BaseApp,
  AwsAccountModel,
  Collection,
  LambdaListView,
  Model,
  LambdaShowView,
  AsideView
) {

  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      this.app = options.app;
      this.module = options.module;
      this.collection = new Collection();
    },
    list: function(aid) {
      var self = this;

      var account = this.findAccount(aid);
      this.collection.fetch({data:account});
      this.collection.on('error', function() {
      });
      this.collection.on('sync', function() {
        this.models.forEach(function(model) {
          model.set('account', account);
        });
        self.app.appLayout.hideAside();
        var awsAccountModel = AwsAccountModel.findOrCreate(account);
        var view = new LambdaListView({
          model: awsAccountModel,
          collection: this
        })
        self.app.appLayout.section.show(view);
      });
    },
    show: function(aid, id) {
      var self = this;
      var account = this.findAccount(aid);

      var model = Model.findOrCreate({id:id});
      model.fetch({data:account});
      model.once('sync', function() {
        model.set('account', account);
        var view = new LambdaShowView({
          model: model
        });
        self.app.appLayout.showAside();
        self.app.appLayout.section.show(view);
      });

      var lambdaCollection = new Collection();
      lambdaCollection.fetch({data:account});
      lambdaCollection.on('error', function() {
      });
      lambdaCollection.on('sync', function() {
        this.models.forEach(function(model) {
          model.set("account_id", account.id);
        });
        var awsAccountModel = AwsAccountModel.findOrCreate(account);
        var asideView = new AsideView({
          model: awsAccountModel,
          collection: lambdaCollection
        });
        self.app.appLayout.aside.show(asideView);
      });

    },
    onRoute: function(aid) {
    },
    findAccount: function(aid) {
      var account = null;
      var accounts = BaseApp.config.accounts.filter(function(account) {
        return account.id === aid;
      });
      if (accounts[0]) {
        return accounts[0];
      }
      return null;
    }
  });

  return Controller;

});
