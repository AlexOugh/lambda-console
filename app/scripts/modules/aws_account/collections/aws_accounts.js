define([
  'baseApp',
  '../models/aws_account'
], function(
  BaseApp,
  AwsAccount
) {

  return BaseApp.Collection.extend({
    model: AwsAccount,
    //urlPath: '/aws_accounts',
  });

});
