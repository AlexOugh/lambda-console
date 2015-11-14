define([
  'backbone'
],

function(
  Backbone
) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'aws_accounts/:aid/lambdas': 'list',
      'aws_accounts/:aid/lambdas/:id': 'show'
    },
    onRoute: function() {
      var controller = this.options.controller;
      controller.onRoute.apply(controller,arguments);
    }
  });

  return Router;

});
