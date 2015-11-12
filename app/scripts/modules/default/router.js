define([
  'backbone'
],
function(
  Backbone,
  session
) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
    },
    routes: {
      '': function() {
        window.location.hash = '#lambdas';
      },
      'unavailable': function() {
        alert("Unavailable");
      }
    },
    onRoute: function() {
    }
  });

  return Router;

});
