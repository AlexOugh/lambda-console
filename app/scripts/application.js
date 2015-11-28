define([
  'jquery',
  'underscore',
  'backbone',
  'baseApp',
  './modules/default/singletons/session',
  'layouts/app',
  'modules/default/module',
  'modules/aws_account/module',
  'modules/lambda/module',
  'HeaderGenerator'
],
function(
  $,
  underscore,
  Backbone,
  BaseApp,
  Session,
  AppLayout,
  DefaultsModule,
  AwsAccountModule,
  LambdaModule,
  HeaderGenerator
) {

  var apiUrl = BaseApp.config.apiUrl;
  //var authLoginUrl = apiUrl+'/auth/sgas-unifiedsso-openidconnect?next='+window.location.href;

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
        //window.location.href = authLoginUrl;
      },
      503: function() {
        window.location.hash = "#unavailable";
      }
    },
    crossDomain: true,
    xhrFields: {
      withCredentials: false
    },
    beforeSend: function(xhr) {
      console.log(arguments[1].url);
      if (arguments[1].url === apiUrl + "/auth") {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('x-api-key', BaseApp.config.apiKey);
      }
      else {
        this.setHeadersForIAM(arguments[1], xhr);
      }
    },
    setHeadersForIAM: function(argument, xhr) {
      var method = argument.type;

      //Use the protocol and host components to build the canonical endpoint
      var parser = document.createElement('a');
      parser.href = apiUrl;
      var endpoint = parser.protocol + parser.host;

      var splitted = argument.url.replace(parser.protocol + "//" + parser.host, '').split('?');
      var url = splitted[0];
      var params = {};
      if (splitted.length > 1 && splitted[1] != "") {
        splitted[1].split('&').forEach(function(str) {
          var kv = str.split('=');
          params[kv[0]] = kv[1];
        });
      }

      var body = '';
      var accessKey = Session.get('AccessKeyId');
      var secretKey = Session.get('SecretAccessKey');
      var sessionToken = Session.get('SessionToken');
      var region = BaseApp.config.region;
      var headers = HeaderGenerator().generate(
        method,
        url,
        params,
        body,
        endpoint,
        accessKey,
        secretKey,
        sessionToken,
        region
      );
      Object.keys(headers).forEach(function(key) {
        xhr.setRequestHeader(key, headers[key]);
      });
    }
  });

  var App = new Backbone.Marionette.Application();

  App.appLayout = new AppLayout({
    el: "#app"
  });

  App.module("defaults",DefaultsModule);
  App.module("AwsAccount",AwsAccountModule);
  App.module("Lambda",LambdaModule);

  App.on('before:start',function() {
    $(document).foundation();
    $(document).foundation('reveal','init');
  });

  App.on('start',function() {
    Backbone.history.start();
  });

  return App;
});
