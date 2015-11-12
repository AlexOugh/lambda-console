define([
  'backbone',
  './controller',
  './router'
],

function(
  Backbone,
  Controller,
  Router
) {
  var Module = Marionette.Module.extend({
    startWithParent: true,

    initialize: function(moduleName, app, options) {
      this.app = app;
      this.moduleName = moduleName;
      this.modulePath = options.modulePath || 'lambda';
      this.controller = new Controller({
        app: app,
        module: this
      });
    },

    onStart: function(options) {
      this.router = new Router({
        controller: this.controller,
        modulePath: this.modulePath
      });
    },

    onStop: function(options) {
    },
  });

  return Module;

});
