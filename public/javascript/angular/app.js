angular.module('PersonalWeb', ['ngRoute']).config(['$locationProvider', '$routeProvider', config]);

function config($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true).hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html'
    })
    .when('/devex', {
      templateUrl: 'templates/devex.html'
    })
    .when('/bio', {
      templateUrl: 'templates/bio.html'
    })
    .when('/devcheat', {
      templateUrl: 'templates/devcheat.html'
    })
    .when('/microblog', {
      templateUrl: 'templates/microblog.html'
    })
    .when('/opinion', {
      templateUrl: 'templates/opinion.html'
    })
    .otherwise({ reditectTo: '/' });

}
