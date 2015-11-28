define([
  'backbone',
  'baseApp'
], function(
  Backbone,
  BaseApp
) {
  var Session = Backbone.Model.extend({
    url: BaseApp.config.apiUrl+'/auth'
  });

  return new Session();
});
