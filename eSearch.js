 var app = angular.module("eSearch");


function createUrl(query, key)
{
   var url = 'http://walmartlabs.api.mashery.com/v1/search?query='+query+'&format=json&apiKey='+key;
}

var key = 'x6dhc4zsjb67bh6fqagzhp39';

app.controller("searchController", function($scope, $http){
	 	
	 var query = $scope.query;
  
  
	$scope.click = function(){
	 alert("test");
	 $http.get(createUrl).
     success(function(data) {
       $scope.walmart_result = data;
       
     }).
     error(function(data, status, headers, config) {
       alert(status);
     });
  
	 };
 });
