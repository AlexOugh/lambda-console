define([
  'text!config.json'
], function(
  configTxt
){

  return JSON.parse(configTxt);

});
