angular.module('jvj', ['ngRoute','jvj.controllers', 'jvj.directives', 'jvj.services'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      template: '<p> {{test}} </p>',
      controller: 'viewCtrl'
    })
  });