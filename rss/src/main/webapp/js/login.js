var app = angular.module("loginApp", []); 

app.controller("loginCtrl", function($scope,$http,$location) {
	
	/**
	 * param
	 */
	$scope.act = null; //account
	$scope.paw = null; //password
		
	/**
	 * function
	 */
	$scope.login = function(){
		
		location = "/rss/myMain/show";
		
	}
	
	
});