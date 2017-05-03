'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'firebase'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  //Remove #! from URL
  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);

function beginShake(quadrant) {
	$("."+quadrant).addClass("shake-slow shake-constant");
}

setTimeout(function(){ beginShake("quadrant1") }, 300);
setTimeout(function(){ beginShake("quadrant3") }, 600);
setTimeout(function(){ beginShake("quadrant4") }, 900);
setTimeout(function(){ beginShake("quadrant2") }, 1200);
