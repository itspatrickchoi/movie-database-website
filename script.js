let app = angular.module("myApp", []);

app.controller("MoviesController", function ($scope, $http) {
    $scope.movies = [];
    $http.get('./movies.json').then(function (data) {
        $scope.movies = data.data;
    })
});