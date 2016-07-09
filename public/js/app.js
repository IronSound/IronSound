(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){

module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.name = '';
        // $scope.password = '';

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);

            $http({
                url: '/login',
                method: 'post',
                data: {
                    name: $scope.name,
                    password: 'password123',
                },
            }).then(function () {
                $location.path('/library');
            }).catch(function () {
                console.error('login failed');
            });
        };
    }]);
}

},{}],3:[function(require,module,exports){
'use strict';

var app = angular.module('IronSoundApp', ['ngRoute']);

require('./services/servlibrary.js')(app);
require('./services/servlogin.js')(app);
require('./controllers/clibrary.js')(app);
require('./controllers/clogin.js')(app);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    redirect: '/login'
  }).when('/login', {
    controller: 'LoginController',
    templateUrl: 'templates/tlogin.html'
  }).when('/library', {
    controller: 'LibraryController',
    templateUrl: 'templates/tlibrary.html'
  });
}]);
},{"./controllers/clibrary.js":1,"./controllers/clogin.js":2,"./services/servlibrary.js":4,"./services/servlogin.js":5}],4:[function(require,module,exports){
module.exports=require(1)
},{}],5:[function(require,module,exports){
module.exports=require(1)
},{}]},{},[3])