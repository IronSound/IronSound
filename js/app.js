let app = angular.module('IronSoundApp', ['ngRoute', 'ngSanitize']);


SC.initialize({
 client_id: 'e852657b139c9de2698653ec21dc2f2b'

});


//controllers
require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/headerController.js')(app);
require('./controllers/playlistController.js')(app);

// services
require('./services/libraryService.js')(app);
require('./services/loginService.js')(app);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'templates/tlogin.html',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/tlogin.html',
    })
    .when('/library', {
      controller: 'LibraryController',
      templateUrl: 'templates/tlibrary.html',
    })
    .when('/playlist', {
      controller: 'playlistController',
      templateUrl: 'templates/tplaylist.html',
    })

}])
