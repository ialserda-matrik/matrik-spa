'use strict';

/**
 * @ngdoc function
 * @name matrikSpaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the matrikSpaApp
 */
angular.module('matrikSpaApp')
  .controller('AboutCtrl', function () {
    var self = this;
    self.about = {
      text_1: "Contact textblok 1",
      text_2: "Contact textblok 2",
    }
    ;
  });
