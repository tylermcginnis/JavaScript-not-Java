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

    var lang = $routeParams.lang;

    if(lang === 'c'){
      $scope.specificLanguage = 'C';
      $scope.description = 'THE NEW DESCRIPTION FOR ' + $scope.specificLanguage;
    } else if(lang === 'cpp'){
      $scope.specificLanguage = 'C++';
      $scope.description = 'THE NEW DESCRIPTION FOR ' + $scope.specificLanguage;
    }

    if(lang === 'cSharp') $scope.specificLanguage = 'C#';
    if(lang === 'css3') $scope.specificLanguage = 'CSS3';
    if(lang === 'html5') $scope.specificLanguage = 'HTML5';
    if(lang === 'java') $scope.specificLanguage = 'Java';
    if(lang === 'javascript') $scope.specificLanguage = 'JavaScript';
    if(lang === 'objectiveC') $scope.specificLanguage = 'Object-C';
    if(lang === 'perl') $scope.specificLanguage = 'Perl';
    if(lang === 'php') $scope.specificLanguage = 'PHP';
    if(lang === 'python') $scope.specificLanguage = 'Python';
    if(lang === 'ruby') $scope.specificLanguage = 'Ruby';



  }])
