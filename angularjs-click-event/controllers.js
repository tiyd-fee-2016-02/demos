
var app = angular.module('myApp', []);
app.controller('coolCats', function($scope) {
    $scope.showMenu = false;
    $scope.catFunc = function() {
        $scope.showMenu = !$scope.showMenu;
    }
});

//showMenu starts false
//myFunc function sets showMenu to opposite of starting position using !(not) operator
