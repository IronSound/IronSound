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
