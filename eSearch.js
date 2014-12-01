 var app = angular.module('e',[]);


function createUrl(query)
{
  var key = 'x6dhc4zsjb67bh6fqagzhp39';
   var url = 'http://walmartlabs.api.mashery.com/v1/search?query='+query+'&format=json&apiKey='+key;
return url;

}



app.controller("searchController", function($scope, $http){
	 	
	
  
  
	$scope.click = function(){
	 alert(createUrl($scope.query));
	 $http.get(createUrl($scope.query)).
     success(function(data) {
       $scope.walmart_result = data;
       
     }).
     error(function(data, status, headers, config) {
       alert(status);
     });
  
	 };
 });
