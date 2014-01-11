angular.module('jvj', ['ngRoute','jvj.controllers', 'jvj.directives', 'jvj.services'])
  .constant('serverRoute', 'http://localhost:3000')
  .config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'homePageListings.html',
      controller: 'homePageListings'
    })
  });