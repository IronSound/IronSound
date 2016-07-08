let app = angular.module('IronSoundApp', ['ngRoute']);

require('')(app);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: '',
      templateUrl: '',
    })
}])
