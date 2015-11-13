define([
  'backbone.marionette',
  'baseApp',
  'hbs!../templates/show',
  '../../lambda/views/lambda_list',
  '../../lambda/collections/lambdas'
], function(
  Marionette,
  BaseApp,
  Tmpl,
  LambdaListView,
  LambdaCollection
) {
  return Marionette.LayoutView.extend({
    template: Tmpl,
    regions: {
      list: 'div.list',
    },
    onBeforeShow: function() {
      var self = this;
    },
    onRender: function() {
      var lambdaCollection = new LambdaCollection();
      lambdaCollection.fetch({data:this.model.toJSON()});
      lambdaCollection.on('error', function() {
      });
      var lambdaListview = new LambdaListView({
        collection: lambdaCollection
      });
      this.getRegion('list').show(lambdaListview);
    }
  });
});
