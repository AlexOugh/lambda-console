define([
  'backbone',
  'baseApp'
], function(
  Backbone,
  BaseApp
) {
  return BaseApp.Model.extend({
    urlPath: '/_sample'
  });
});
