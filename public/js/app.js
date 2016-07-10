(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('LibraryController', ['$scope', 'libraryService', function($scope, libraryService) {
        $scope.library = [{
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, {
            artist: "Paul Wood"
        }, ];

        $scope.add = function() {
            console.log("Adding the song... hopefully")
            return libraryService.addTrack(5)
        }


    }]);

}

},{}],2:[function(require,module,exports){

module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
        $scope.name = '';
        $scope.password = '';
        $scope.tab = 0;

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);

            // $http({
            //     url: '/login',
            //     method: 'post',
            //     data: {
            //         name: $scope.name,
            //         password: 'password123',
            //     },
            // }).then(function () {
            //     //$location.path('/library');
            // }).catch(function () {
            //     console.error('login failed');
            // });

            loginService.userLogin($scope.name, $scope.password, $scope.tab);

            $location.path('/library');
        };
    }]);
}

},{}],3:[function(require,module,exports){
'use strict';

var app = angular.module('IronSoundApp', ['ngRoute']);

//controllers
require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);

// services
require('./services/libraryService.js')(app);
require('./services/loginService.js')(app);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'LoginController',
    templateUrl: 'templates/tlogin.html'
  }).when('/login', {
    controller: 'LoginController',
    templateUrl: 'templates/tlogin.html'
  }).when('/library', {
    controller: 'LibraryController',
    templateUrl: 'templates/tlibrary.html'
  });
}]);
},{"./controllers/LibraryController.js":1,"./controllers/LoginController.js":2,"./services/libraryService.js":4,"./services/loginService.js":5}],4:[function(require,module,exports){
module.exports = function(app){



  //service stores user data
  app.factory('libraryService', ['$http', function($http){


    return {
      addTrack: function (trackId){
        $http({
          method: 'POST',
          url: '/add-song',
          data: {
            trackId: trackId
          }
        }).then(function(response){
          console.log('adding song from library', response);
        })
      }
    }


  }])
}

},{}],5:[function(require,module,exports){
module.exports = function(app){



  //service stores user data
  app.factory('loginService', ['$http', function($http){


    return {
      userLogin: function (name,password,tab){
        console.log(name, password);
        $http({
          method: 'POST',
          url: '/login',
          data: {
            username: name,
            password: password,
            tab: 0,
          }
        }).then(function(response){
          console.log('getting the response', response);
        })
      }
    }


  }])
}

},{}]},{},[3])