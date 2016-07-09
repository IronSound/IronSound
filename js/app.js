let app = angular.module('IronSoundApp', ['ngRoute']);

require('./services/servlibrary.js')(app);
require('./services/servlogin.js')(app);
require('./services/servplaylist.js')(app);
require('./controllers/cplaylist.js')(app);
require('./controllers/cfooter.js')(app);
require('./controllers/cheader.js')(app);
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
      controller: 'LibraryController',
      templateUrl: 'templates/tlibrary.html',
    })
    .when('/playlist', {
      controller: 'LibraryController',
      templateUrl: 'templates/tplaylist.html',
    })
}])
