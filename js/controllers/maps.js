var mapsControllers = angular.module('mapsControllers', ['uiGmapgoogle-maps']);

mapsControllers.config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        }); 
    }]
);

mapsControllers.controller('mapController', function ($scope, $state, $http, FireBase) {
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  $scope.auth = FireBase.authenticate();
  $scope.auth.$onAuth(function(authData) {
  $scope.currentUser.$loaded().then(function () {
    $scope.myApartment = FireBase.getObject('/apartments/' + $scope.currentUser.apartmentId);
    $scope.myApartment.$loaded().then(function(){
      var address = $scope.myApartment.address;
      var street = address.street.split(' ').join('+');
      var city = address.city;
      var state = 'NY';
      var mapURL = 'http://maps.google.com/maps/api/geocode/json?address=' + street + ',' + city + ',+' + state + '&sensor=false';
      console.log(mapURL);
      $http.get(mapURL).success(function(mapData) {
        angular.extend($scope, mapData);
        $scope.map = mapData;
        console.log(mapData);
      });
    });
  });
});
});
