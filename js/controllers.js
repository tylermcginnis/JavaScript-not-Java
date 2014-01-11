angular.module('jvj.controllers', [])
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.test = 'testtest';
  }])
  .controller('homePageListings', ['$scope', function($scope){
    $scope.test = 'in home page listings view'
  }])