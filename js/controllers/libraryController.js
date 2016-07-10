module.exports = function (app) {
    app.controller('LibraryController', ['$scope', 'libraryService', function ($scope, libraryService) {
        $scope.library = [
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
          {artist:"Paul Wood"},
        ];


          $scope.add = function () {
            console.log('adding a song')
            return libraryService.addTrack(5);
          }
    }]);
}
