angular.module('jvj.controllers', [])
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.test = 'testtest';
  }])
  .controller('viewCtrl', ['$scope', function($scope){
    $scope.test = 'in view'
  }])