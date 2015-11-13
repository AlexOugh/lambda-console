define([
  'backbone',
  'baseApp',
  '../../lambda/models/lambda',
  '../../lambda/collections/lambdas'
], function(
  Backbone,
  BaseApp,
  LambdaModel,
  LambdaCollection
) {
  return BaseApp.Model.extend({
    //urlPath: '/aws_account',
    /*relations: [
      {
        type: Backbone.HasMany,
        key: 'lambdas',
        relatedModel: LambdaModel,
        collectionType: LambdaCollection,
        collectionKey: 'account',
        includeInJSON: false,
        reverseRelation: {
          includeInJSON: 'id',
          key: 'account'
        }
      }
    ]*/
  });
});
