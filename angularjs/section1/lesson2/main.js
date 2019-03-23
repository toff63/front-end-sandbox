var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope){
	$scope.formData = {};
	$scope.onSubmit = function(){
		console.log("Hey I'm submitted");
		console.log($scope.formData);
	}
});
