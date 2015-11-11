define([
  'baseApp',
  '../models/_sample'
], function(
  BaseApp,
  _Sample
) {

  return BaseApp.Collection.extend({
    model: _Sample,
    urlPath: '/_samples'
  });

});
