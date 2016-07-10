module.exports = function (app) {
    app.controller('LibraryController', ['$scope', function ($scope) {
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
    }]);
}
