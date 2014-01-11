angular.module('jvj.controllers', [])
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.test = 'testtest';
  }])
  .controller('homePageListings', ['$scope', function($scope){
    $scope.imageArray = [
        'images/logos/c-logo.jpg',
        'images/logos/cpp-logo.jpeg',
        'images/logos/csharp-logo.png',
        'images/logos/css3-logo.png',
        'images/logos/html5-logo.png',
        'images/logos/java-logo.png',
        'images/logos/js-logo.png',
        'images/logos/objective-c-logo.png',
        'images/logos/perl-logo.JPG',
        'images/logos/php-logo.png',
        'images/logos/python-logo.jpg',
        'images/logos/ruby-logo.png',
    ];
  }])