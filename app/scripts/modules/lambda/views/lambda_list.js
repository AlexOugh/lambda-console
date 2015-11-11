define([
  'backbone.marionette',
  './lambda_list_item',
  'hbs!../templates/lambda_list'
], function(
  Marionette,
  ChildView,
  listTmpl
) {
  return Marionette.CompositeView.extend({
    template: listTmpl,
    childViewContainer: 'tbody',
    childView: ChildView
  });
});
