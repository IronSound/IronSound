module.exports = function(app){



  //service stores user data
  app.factory('libraryService', ['$http', function($http){

let addedSongs = [];

    return {
      addTrack: function (trackId){
        $http({
          method: 'POST',
          url: '/add-song',
          data: {
            trackId: trackId
          }
        }).then(function(response){
          console.log('adding song from library', response);
        })
      }
    }


  }])
}
