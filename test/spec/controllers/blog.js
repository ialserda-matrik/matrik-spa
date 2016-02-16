'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('matrikSpaApp'));

  var BlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should define a list object',function(){
    expect(BlogCtrl.blogs).toBeDefined();
  });

  it('should attach a list of blogs to the scope', function () {
    expect(BlogCtrl.blogs.length).toBe(3);
  });
  it('should define a list object', function(){
    expect(BlogCtrl.blogs[0]).toEqual('Blog 1');
  });
  it('should define a list object', function(){
    expect(BlogCtrl.blogs[2]).toEqual('Blog 2');
  });
  it('should define a list object', function(){
    expect(BlogCtrl.blogs[3]).toEqual('Blog 3');
  });
});
