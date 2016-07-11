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
