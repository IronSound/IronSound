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
