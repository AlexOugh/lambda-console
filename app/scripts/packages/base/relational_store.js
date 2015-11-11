define([
  'exports',
  'backbone',
  'backbone.relational'
], function(
  exports,
  Backbone
){

  var store = {};

  Backbone.Relational.store.addModelScope(store);

  return store;
});
