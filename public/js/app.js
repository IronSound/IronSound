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

// attemping to make the tab count
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
    app.controller('playlistController', ['$scope', '$sce', '$http', '$location', 'libraryService', function($scope, $sce, $http, $location, libraryService) {
console.log('runninnnng');
      // $scope.player =  $sce.trustAsHtml('<iframe id="tester" width="100%" height="400" scrolling="no" frameborder="no"></iframe>');;
      // $scope.player = $sce.trustAsHtml('<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>');
      // $scope.player = '<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>';
      // console.log($scope.player);
        $scope.playlist = libraryService.getPlaylist();
        // $scope.player = libraryService.getPlayer();
        libraryService.getPlayer().then(function (embed) {
            document.getElementById('tester').innerHTML = embed.html;
            // console.log(embed.html);
            // $scope.player = embed.html;
            // console.log($scope.player);
            // $scope.player = "<h1>hello</h1>";
            // $scope.player = $sce.trustAsHtml(embed.html);
            // $scope.player = $sce.trustAsHtml('<h1>ahoy</h1>');
            // $scope.player = '<h1>ahoy</h1>';
            // $scope.player = $sce.trustAsHtml('<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>');
        });
    }]);
}

},{}],5:[function(require,module,exports){
'use strict';

var app = angular.module('IronSoundApp', ['ngRoute', 'ngSanitize']);

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

    // var track_url = 'http://api.soundcloud.com/tracks/13158665?client_id=e852657b139c9de2698653ec21dc2f2b';
    // SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    //  console.log('oEmbed response: ', oEmbed);
    // });


    app.factory('libraryService', ['$http', function($http) {
        let songtoadd = [];
        let html = "";

        return {

            getPlayer:function(){

              return SC.get('/tracks/107156209')
              .then(function(song){
                console.log(song);
                return SC.oEmbed(song.permalink_url);
              })
              .then(function(oEmbed){
                console.log(oEmbed)
                // angular.copy(oEmbed.html,html);

                return oEmbed;
              });
              // return html;
            },
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
                    console.log(SC);
                    return { trackId: 268158450};
                    // need to return actual trackId, cheatingggg
                });
                // .then(function(song){
                //   return SC.stream('/tracks/'+song.trackId)
                // }).then(function(player){
                //   console.log(player);
                //   player.play();
                // });
                return songtoadd;
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