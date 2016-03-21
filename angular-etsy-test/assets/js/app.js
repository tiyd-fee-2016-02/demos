var DoodleScript = angular.module('DoodleScript', ['ngRoute'],
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })

    .when('/cats', {
      templateUrl: 'views/cats.html',
      controller: 'ListListingController'
    })

  });  //END ROUTING
