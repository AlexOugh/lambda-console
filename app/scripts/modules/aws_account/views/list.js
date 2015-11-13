define([
  'backbone.marionette',
  './list_item',
  'hbs!../templates/list'
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
