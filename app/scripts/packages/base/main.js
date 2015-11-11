define([
  './collection',
  './model',
  './config',
  './relational_store',
  'backbone'
], function(
  Collection,
  Model,
  config,
  relationalStore,
  Backbone
){
  Backbone.Relational.store.addModelScope(relationalStore);

  return {
    Collection: Collection,
    Model: Model,
    config: config,
    relationalStore: relationalStore
  }
});
