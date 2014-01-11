angular.module('jvj.controllers', [])
  .controller('mainCtrl', ['$scope', '$routeParams', function($scope){
    $scope.test = 'testtest';
  }])
  .controller('homePageListings', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.imageArray = {
      c: 'images/logos/c-logo.jpg',
      cpp: 'images/logos/cpp-logo.jpeg',
      cSharp:'images/logos/csharp-logo.png',
      css3: 'images/logos/css3-logo.png',
      html5: 'images/logos/html5-logo.png',
      java: 'images/logos/java-logo.png',
      javascript: 'images/logos/js-logo.png',
      objectiveC: 'images/logos/objective-c-logo.png',
      perl: 'images/logos/perl-logo.JPG',
      php: 'images/logos/php-logo.png',
      python: 'images/logos/python-logo.jpg',
      ruby: 'images/logos/ruby-logo.png',
    };
  }])
  .controller('languageSpecificListings', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.imageArray = {
      c: 'images/logos/c-logo.jpg',
      cpp: 'images/logos/cpp-logo.jpeg',
      cSharp:'images/logos/csharp-logo.png',
      css3: 'images/logos/css3-logo.png',
      html5: 'images/logos/html5-logo.png',
      java: 'images/logos/java-logo.png',
      javascript: 'images/logos/js-logo.png',
      objectiveC: 'images/logos/objective-c-logo.png',
      perl: 'images/logos/perl-logo.JPG',
      php: 'images/logos/php-logo.png',
      python: 'images/logos/python-logo.jpg',
      ruby: 'images/logos/ruby-logo.png',
    };

    $scope.parameter = $routeParams.lang;
  }])
