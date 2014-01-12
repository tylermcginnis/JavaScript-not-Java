angular.module('jvj', ['ngRoute','jvj.controllers', 'jvj.directives', 'jvj.services'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'gridTemplate.html',
        controller: 'homePageListings'
      })
      .when('/language/:lang', {
        templateUrl: 'languageSpecificGrid.html',
        controller: 'languageSpecificListings'
      })
      .when('/language/:lang/:lib', {
        templateUrl: 'libSpecific.html',
        controller: 'libSpecificListing'
      })
      .otherwise({redirectTo: '/'});
  });