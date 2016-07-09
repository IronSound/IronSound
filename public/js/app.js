(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports=require(1)
},{}],3:[function(require,module,exports){
module.exports=require(1)
},{}],4:[function(require,module,exports){
module.exports=require(1)
},{}],5:[function(require,module,exports){
module.exports=require(1)
},{}],6:[function(require,module,exports){
'use strict';

var app = angular.module('IronSoundApp', ['ngRoute']);

require('./services/servlibrary.js')(app);
require('./services/servlogin.js')(app);
require('./services/servplaylist.js')(app);
require('./controllers/cplaylist.js')(app);
require('./controllers/cfooter.js')(app);
require('./controllers/cheader.js')(app);
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
  }).when('/playlist', {
    controller: 'LibraryController',
    templateUrl: 'templates/tplaylist.html'
  });
}]);
},{"./controllers/cfooter.js":1,"./controllers/cheader.js":2,"./controllers/clibrary.js":3,"./controllers/clogin.js":4,"./controllers/cplaylist.js":5,"./services/servlibrary.js":7,"./services/servlogin.js":8,"./services/servplaylist.js":9}],7:[function(require,module,exports){
module.exports=require(1)
},{}],8:[function(require,module,exports){
module.exports=require(1)
},{}],9:[function(require,module,exports){
module.exports=require(1)
},{}]},{},[6])
