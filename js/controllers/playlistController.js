module.exports = function(app) {
    app.controller('playlistController', ['$scope', '$http', '$location', 'libraryService', function($scope, $http, $location, libraryService) {

        $scope.trackId = libraryService.addedSongs();

    }]);
}
