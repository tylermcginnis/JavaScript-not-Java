angular.module('jvj', ['ngRoute','jvj.controllers', 'jvj.directives', 'jvj.services'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'gridTemplate.html',
        controller: 'homePageListings'
      })
      .when('language/:lang', {
        templateUrl: '/gridTemplate.html',
        controller: 'languageSpecificListings'
      })
      .otherwise({redirectTo: '/'});
  });