define([
  'jquery',
  'underscore',
  'backbone',
  'baseApp',
  'layouts/app',
  'modules/default/module',
  'modules/lambda/module'
],
function(
  $,
  underscore,
  Backbone,
  BaseApp,
  AppLayout,
  DefaultsModule,
  LambdaModule
) {



  /*var apiUrl = BaseApp.config.apiUrl;

  // var authLoginUrl = apiUrl+'/auth/sgas-unifiedsso-openidconnect?next='+window.location.href+window.location.hash;
  var authLoginUrl = apiUrl+'/auth/sgas-unifiedsso-openidconnect?next='+window.location.href;*/

  $.ajaxSetup({

    statusCode: {
      0: function() {
        window.location.hash = "#unavailable";
      },
      400: function(jqXHR) {
        if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
          if (jqXHR.responseJSON.error == "bootstrap required") {
            window.location.hash = "#bootstrap";
          }
          else {
            $('#appModal').foundation('reveal', 'open');
          }
        }
      },
      403: function(jqXHR) {
        if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
          if (jqXHR.responseJSON.message == "authentication required") {
            //window.location.href = authLoginUrl;
          }
        }
      },
      401: function() {
        //var apiUrl = BaseApp.config.apiUrl;
        //window.location.href = authLoginUrl;
      },
      503: function() {
        window.location.hash = "#unavailable";
      }
    },
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  });

  var App = new Backbone.Marionette.Application();

  App.appLayout = new AppLayout({
    el: "#app"
  });

  App.module("defaults",DefaultsModule);
  App.module("_Sample",LambdaModule);

  App.on('before:start',function() {
    $(document).foundation();
    $(document).foundation('reveal','init');
  });

  App.on('start',function() {
    Backbone.history.start();
  });

  return App;
});
