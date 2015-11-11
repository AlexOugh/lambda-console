define([
  'backbone.marionette',
  './_sample_list_item',
  'hbs!../templates/_sample_list'
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
