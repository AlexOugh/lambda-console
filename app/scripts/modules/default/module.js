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
      this.controller = new Controller({app:app});
    },

    onStart: function(options) {
      this.router = new Router({controller: this.controller});
      this.controller.pageSetup();
    },

    onStop: function(options) {
    },
  });

  return Module;

});
