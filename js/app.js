let app = angular.module('IronSoundApp', ['ngRoute']);


//controllers
require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/headerController.js')(app);

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

}])
