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
