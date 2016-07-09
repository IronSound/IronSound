let app = angular.module('IronSoundApp', ['ngRoute']);

require('./services/servlibrary.js')(app);
require('./services/servlogin.js')(app);
require('./controllers/clibrary.js')(app);
require('./controllers/clogin.js')(app);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirect: '/login',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'templates/tlogin.html',
    })
    .when('/library', {
      controller: 'LibraryController', 'HeaderController', 'FooterController',
      templateUrl: 'templates/tlibrary.html',
    })

}])
