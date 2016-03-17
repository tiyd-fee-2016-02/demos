
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'welcome.html',
      controller: 'StudentController'
    })
    .when('/ViewStudents', {
      templateUrl: 'ViewStudents.html',
      controller: 'StudentController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

mainApp.controller('StudentController', function($scope){
  $scope.students = [
    {name: 'Mark Waugh', city: 'New York'},
    {name: 'Steve Jonathan', city: 'London'},
    {name: 'John Marcus', city: 'Paris'}
  ];

  $scope.message = "Click on the hyper link to view the students list."

});
