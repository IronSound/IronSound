(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('LibraryController', ['$scope', 'libraryService', '$location', function($scope, libraryService, $location) {

        $scope.playlist = libraryService.getPlaylist();

        $scope.library = [{
            artist: "Paul Wall",
            song: "Sittin' Sideways",
            trackId: 1,
        }, {
          artist: "Beyonce",
          song: "Love on Top",
          trackId: 2,
        }, {
          artist: "Stevie Wonder",
          song: "Signed, Sealed, Delivered",
          trackId: 3,
        },
       ];

        $scope.add = function(song) {
            console.log("Adding the song... hopefully", song.trackId)
            libraryService.addTrack(song.trackId);
            $location.path('/playlist');
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
            loginService.userLogin($scope.name, $scope.password, $scope.tab);
            $location.path('/library');
        };
    }]);
}

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller("headerController", ["$scope", "loginService", function($scope, loginService) {
        $scope.name = loginService.getUserName();
        $scope.tab = loginService.getUserTab();

// attemping to make the damn tab count
        // $scope.counter = 0;
        // $scope.count = function(inc) {
        //     $scope.counter += inc;
        // };

        // var app = angular.module("myApp", []);
        // app.controller('check', function($scope) {
        //     // $scope.counter = 0;
        //     // $scope.count = function(inc) {
        //     //     $scope.counter += inc;
        //     // };
        // });
    }]);

};

},{}],4:[function(require,module,exports){
module.exports = function(app) {
    app.controller('playlistController', ['$scope', '$http', '$location', 'libraryService', function($scope, $http, $location, libraryService) {
        $scope.playlist = libraryService.getPlaylist();


        return libraryService.getPlaylist();
        $scope.tracks = function() {
          console.log('help');
          $scope.playlist = libraryService.getPlaylist();
        }

    }]);
}

},{}],5:[function(require,module,exports){
'use strict';

var app = angular.module('IronSoundApp', ['ngRoute']);

//controllers
require('./controllers/LibraryController.js')(app);
require('./controllers/LoginController.js')(app);
require('./controllers/headerController.js')(app);
require('./controllers/playlistController.js')(app);

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
  }).when('/playlist', {
    controller: 'playlistController',
    templateUrl: 'templates/tplaylist.html'
  });
}]);
},{"./controllers/LibraryController.js":1,"./controllers/LoginController.js":2,"./controllers/headerController.js":3,"./controllers/playlistController.js":4,"./services/libraryService.js":6,"./services/loginService.js":7}],6:[function(require,module,exports){
module.exports = function(app) {
    //service stores user data
    app.factory('libraryService', ['$http', function($http) {
        let songtoadd = [];

        return {
            addTrack: function(trackId) {
                $http({
                    method: 'POST',
                    url: '/add-song',
                    data: {
                        trackId: trackId
                    }
                })
            },

            getPlaylist: function() {
                $http({
                    method: 'GET',
                    url: '/songs',

                }).then(function(song) {
                    console.log('getting song', song.data);
                    angular.copy(song.data, songtoadd);
                    return songtoadd;
                })
            },

        }

    }])
}

},{}],7:[function(require,module,exports){
module.exports = function(app){
  //service stores user data
  app.factory('loginService', ['$http', function($http){
    let username = "";
    let usertab = null;

    return {
      userLogin: function (name,password,tab){
        username = name;
        usertab = tab;
        return $http({
          method: 'POST',
          url: '/login',
          data: {
            name: name,
            password: password,
            tab: 0,
          }
        }).then(function(response){
          console.log('getting the response', response);
          // username = name;
          console.log(username);
        })
      },
      getUserName: function (){
        return username;
      },
      getUserTab: function () {
        return usertab;
      }
    }


  }])
}

},{}]},{},[5])