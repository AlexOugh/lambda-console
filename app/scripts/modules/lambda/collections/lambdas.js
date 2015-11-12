define([
  'baseApp',
  '../models/lambda'
], function(
  BaseApp,
  Lambda
) {

  return BaseApp.Collection.extend({
    model: Lambda,
    urlPath: '/lambdas'
  });

});
