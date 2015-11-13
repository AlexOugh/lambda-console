define([
  'backbone',
  'baseApp',
  //'../aws_iamrole/model',
  //'../aws_iamrole/views/create',
  './collections/aws_accounts',
  './models/aws_account',
  //'../assigned_awsaccount/collection',
  //'./models/aws_account',
  //'./views/aside',
  './views/list',
  //'./views/create',
  //'./views/dashboard',
  './views/show'
  //'../lambda/views/lambda_list',
  //'../lambda/collections/lambdas'
],
function(
  Backbone,
  BaseApp,
  //IamRoleModel,
  //CreateIamRoleView,
  AwsAccountCollection,
  AwsAccountModel,
  //AssignedAwsAccountCollection,
  //AwsAccountModel,
  //AsideView,
  ListView,
  //CreateView,
  //DashboardLayout,
  ShowView
  //LambdaListView,
  //LambdaCollection
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
    /*create: function() {
      var self = this;
      this.app.appLayout.showAside();

      var model = new AwsAccountModel();
      var view = new CreateView({model:model});

      model.once(
        'sync',
        self.module.router.navigate.bind(this.module.router,'#aws_account',{trigger:true})
      );
      this.app.appLayout.section.show(view);
    },*/
    show: function(id) {
      //this.app.appLayout.showAside();
      this.app.appLayout.hideAside();

      // find the taget AwsAccount model instance
      var accounts = [];
      var accountModel = null;
      if (this.awsAccountCollection.models.length > 0)
      {
        accounts = this.awsAccountCollection.models.filter(function(account) {
          return account.id === id;
        });
        if (accounts[0]) {
          accountModel = accounts[0];
        }
      }
      else {
        accounts = BaseApp.config.accounts.filter(function(account) {
          return account.id === id;
        });
        if (accounts[0]) {
          accountModel = new AwsAccountModel(accounts[0]);
        }
      }

      // display 'show' page
      var showView = new ShowView({
        model: accountModel
      });
      this.app.appLayout.section.show(showView);
    },
    /*addIamRole: function(id) {
      var self = this;
      var view = new CreateIamRoleView({
        model: new IamRoleModel()
      });

      var acct = AwsAccountModel.findOrCreate({id:id});
      acct.fetch();
      acct.once('sync', function() {
        view.model.set('account',acct.toJSON());
      });

      view.model.once(
        'sync',
        self.module.router.navigate.bind(self.module.router,'#aws_account/'+id,{trigger:true})
      );

      this.app.appLayout.section.show(view);
    },*/
    onRoute: function() {
      var self = this;

      //this.awsAccountCollection.fetch();
      BaseApp.config.accounts.forEach(function(account) {
        self.awsAccountCollection.push(account);
      });

      /*this.awsAccountCollection.on('error', function() {
        var assignedAwsAccountCollection = new AssignedAwsAccountCollection();
        assignedAwsAccountCollection.fetch();
        self.app.appLayout.aside.show(new AsideView({
          collection: assignedAwsAccountCollection
        }));
        assignedAwsAccountCollection.on('sync',function(c) {
          if (c.length === 0) {
            this.app.appLayout.hideAside();
          }
        });
      });
      this.app.appLayout.aside.show(new AsideView({
        collection: this.awsAccountCollection
      }));*/
    }
  });

  return Controller;

});
