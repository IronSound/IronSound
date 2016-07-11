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
