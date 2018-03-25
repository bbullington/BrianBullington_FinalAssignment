//trying to utilize stock code from an angular walk through. Unable to get anything to render


var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    // $http.get('/api/todos')
    //     .success(function(data) {
    //         $scope.todos = data;
    //     })
    //     .error(function(data) {
    //         console.log('Error: ' + data);
    //     });

    $http.get('/api/movieList')
        .success(function(data) {
            $scope.movies = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });



}
