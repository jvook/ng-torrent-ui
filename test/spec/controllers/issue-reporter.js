'use strict';

describe('Controller: IssueReporterCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTorrentUiApp'));

  var IssueReporterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssueReporterCtrl = $controller('IssueReporterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
