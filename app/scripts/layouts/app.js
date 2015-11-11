define([
  'jquery',
  'underscore',
  'backbone.marionette'
],

function(
  $,
  underscore,
  Marionette
) {
  var AppLayoutView = Marionette.LayoutView.extend({

    regions: {
      header: "#header",
      section: "#section",
      aside: "#aside",
      footer: "#footer",
      appModal: "#appModal"
    },

    hideAside: function() {
      $('body').addClass('single-column');
    },
    showAside: function() {
      $('body').removeClass('single-column');
    }
  });

  return AppLayoutView;
});
