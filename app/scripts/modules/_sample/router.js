define([
  'backbone'
],

function(
  Backbone
) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '_samples': 'list'
    },
    onRoute: function() {
      var controller = this.options.controller;
      controller.onRoute.apply(controller,arguments);
    }
  });

  return Router;

});
