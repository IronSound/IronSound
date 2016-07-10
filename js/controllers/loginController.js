
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
                //$location.path('/library');
            }).catch(function () {
                console.error('login failed');
            });
            $location.path('/library');
        };
    }]);
}
