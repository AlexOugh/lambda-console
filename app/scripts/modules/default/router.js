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
        window.location.hash = '#aws_accounts';
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
