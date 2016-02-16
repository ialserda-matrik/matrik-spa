'use strict';

/**
 * @ngdoc function
 * @name matrikSpaApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the matrikSpaApp
 */
angular.module('matrikSpaApp')
  .controller('BlogCtrl', function () {
    var self = this;
    self.blogs = [
      'Blog 1',
      'Blog 2',
      'Blog 3'
    ];
    self.addBlog = function() {
      self.blogs.push(self.blog);
      self.blog = '';
    };
    self.removeTodo = function(index) {
      self.blogs.splice(index,1);
    };
  });
