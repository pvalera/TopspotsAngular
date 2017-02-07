// Read a text file with three variables
// name, description, and location (lat and lon coordinates) and
// outputs to a table format
var app=angular.module('myApp', []);
  app.controller('myCtrl', function($scope,$http) {
    $http.get('topspots.json')
         .then(function(response) {
    $scope.topspots = response.data;
  });
});
