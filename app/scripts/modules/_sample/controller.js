define([
  'baseApp',
  'backbone',
  './collections/_samples',
  './models/_sample',
  './views/_sample_list'
],
function(
  BaseApp,
  Backbone,
  _SampleCollection,
  _SampleModel,
  _SampleListView
) {

  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      this.app = options.app;
      this.module = options.module;
    },
    list: function() {
      this.app.appLayout.hideAside();
      this._sampleCollection = new _SampleCollection();
      this._sampleListView = new _SampleListView({
        collection: this._sampleCollection
      });
      this.app.appLayout.section.show(this._sampleListView);
    },
    onRoute: function() {
      var self = this;
      this._sampleCollection.fetch({data:{archivedBy:'none'}});
      this._sampleCollection.on('error', function() {
      });
    }
  });

  return Controller;

});
