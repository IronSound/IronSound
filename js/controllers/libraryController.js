module.exports = function(app) {
    app.controller('LibraryController', ['$scope', 'libraryService', '$location', function($scope, libraryService, $location) {


        $scope.library = [{
            artist: "Paul Wall",
            song: "Sittin' Sideways",
            trackId: 1,
        }, {
          artist: "Paul Wall",
          song: "Sittin' Sideways",
          trackId: 2,
        }, {
          artist: "Paul Wall",
          song: "Sittin' Sideways",
          trackId: 3,
        },
       ];

        $scope.add = function(song) {
            console.log("Adding the song... hopefully", song.trackId)
            libraryService.addTrack(song.trackId);
            $location.path('/playlist');
        }

        libraryService.getPlaylist();


    }]);

}
