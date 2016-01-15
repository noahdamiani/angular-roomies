$(document).foundation();

var fb = new Firebase('https://angular-roomies.firebaseio.com');

var app = angular.module('app', [
  'ngLoadingSpinner',
  'firebase',
  'ui.router',
  'angularMoment'
]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
}]);

app.controller('HomeController', function ($scope) {
  $scope.siteName = 'Roomies';
  $scope.version = '1.0';
});
