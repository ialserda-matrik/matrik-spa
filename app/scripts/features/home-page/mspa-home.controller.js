'use strict';

/**
 * @ngdoc function
 * @name matrikSpaApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the matrikSpaApp
 */
angular.module('matrikSpaApp')
  .controller('HomeCtrl', function () {
    var self = this;
    self.home = [];
    self.infoItems = [
      {
        "title": "First Info Item",
        "text": "This is the text of the First Info Item"
      },
      {
        "title": "Second Info Item",
        "text": "This is the text of the Second Info Item"
      },
      {
        "title": "Third Info Item",
        "text": "This is the text of the Third Info Item"
      },
      {
        "title": "Fourth Info Item",
        "text": "This is the text of the Fourth Info Item"
      },
      {
        "title": "Fifth Info Item",
        "text": "This is the text of the Fifth Info Item"
      },
      {
        "title": "Sixt Info Item",
        "text": "This is the text of the Sixt Info Item"
      }
    ];

  });
