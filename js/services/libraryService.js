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
                }).then(function(song) {
                    console.log('adding song from library', song);
                })
            },

            getPlaylist: function() {
                $http({
                    method: 'GET',
                    url: '/songs',

                }).then(function(song) {
                    console.log('getting song', song);
                    angular.copy(song, songtoadd);
                    return songtoadd;
                })
            },

        }

    }])
}
