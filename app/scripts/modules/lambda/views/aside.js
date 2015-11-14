define([
  'backbone.marionette',
  './lambda_list_item',
  'hbs!../templates/lambda_aside',
  'hbs!../templates/aside'
], function(
  Marionette,
  ChildView,
  LambdaAsideTmpl,
  tmpl
) {

  var CV = ChildView.extend({
    tagName: 'li',
    template: LambdaAsideTmpl
  });

  return Marionette.CompositeView.extend({
    template: tmpl,
    childViewContainer: '.side-nav',
    childView: CV
  });
});
