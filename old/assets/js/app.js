var zoltan = angular.module('zoltan',['ngRoute'])

zoltan.config( function( $routeProvider ) {
  $routeProvider.when( "/", {
	    templateUrl: "assets/pages/index.html"
	    //controller: "dashboardCtrl"
  	}).when("/about", {
  		templateUrl: "assets/pages/about.html"
  	}).when("/skills", {
  		templateUrl: "assets/pages/skills.html"
  	});
});