define([
  'backbone',
  'backbone.paginator',
  './config'
], function(
  Backbone,
  Paginator,
  config
){

  var Collection = Paginator.extend({
    url: function() {
      return config.apiUrl + this.urlPath;
    },
    state: {
      pageSize: null
    },
    queryParams: {
      totalPages: null,
      totalRecords: null,
      sortKey: "sort",
      pageSize: "limit",
      currentPage: null,
      skip: function() {
        return (this.state.currentPage-1) * this.state.pageSize;
      }
    },
    parseState: function(resp, queryParams, state, options) {
      var totalCount = options.xhr.getResponseHeader("x-total-count");

      return {
        totalRecords: parseInt(totalCount,10) || 0
      }

    },
    sync: function(method,model,options) {
      if (this.populate && method === "read") {
        options.data = options.data || {};
        options.data.populate = this.populate
      }
      return Backbone.sync.call(this,method,model,options);
    }

  });

  return Collection;
});
