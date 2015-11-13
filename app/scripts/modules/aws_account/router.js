define([
  'backbone'
],

function(
  Backbone
) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'aws_accounts': 'list',
      //'aws_accounts/create': 'create',
      'aws_accounts/:id': 'show',
      //'aws_accounts/:id/iamrole/create': 'addIamRole'
    },
    onRoute: function() {
      var controller = this.options.controller;
      controller.onRoute.apply(controller,arguments);
    }
  });

  return Router;

});
