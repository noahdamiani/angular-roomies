var app;

app.factory('FireBase', getFireBaseService);
function getFireBaseService($firebaseArray, $firebaseObject) {
  return {
    getArray: function(url) {
      var ref = new Firebase("https://angular-laundry.firebaseio.com" + url);
      return $firebaseArray(ref);
    },
    getObject: function(url) {
      var ref = new Firebase("https://angular-laundry.firebaseio.com" + url);
      return $firebaseObject(ref);
    }
  }
}
