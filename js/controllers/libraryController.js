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
  console.log ("Adding the song... hopefully")
    return  libraryService.addTrack(5)
}

    }]);

}
