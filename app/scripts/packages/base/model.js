define([
  'exports',
  'backbone',
  './config',
  'backbone.relational'
], function(
  exports,
  Backbone,
  config
){


  var Model = Backbone.RelationalModel.extend({
    urlRoot: function() {
      var url = config.apiUrl + this.urlPath;
      return url;
    },
    sync: function(method,model,options) {
      if (this.populate && method === "read") {
        options.data = options.data || {};
        options.data.populate = this.populate
      }
      return Backbone.sync.call(this,method,model,options);
    }

  });

  return Model;
});
