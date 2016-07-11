module.exports = function(app) {
    app.controller('playlistController', ['$scope', '$sce', '$http', '$location', 'libraryService', function($scope, $sce, $http, $location, libraryService) {
console.log('runninnnng');
      // $scope.player =  $sce.trustAsHtml('<iframe id="tester" width="100%" height="400" scrolling="no" frameborder="no"></iframe>');;
      // $scope.player = $sce.trustAsHtml('<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>');
      // $scope.player = '<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>';
      // console.log($scope.player);
        $scope.playlist = libraryService.getPlaylist();
        // $scope.player = libraryService.getPlayer();
        libraryService.getPlayer().then(function (embed) {
            document.getElementById('tester').innerHTML = embed.html;
            // console.log(embed.html);
            // $scope.player = embed.html;
            // console.log($scope.player);
            // $scope.player = "<h1>hello</h1>";
            // $scope.player = $sce.trustAsHtml(embed.html);
            // $scope.player = $sce.trustAsHtml('<h1>ahoy</h1>');
            // $scope.player = '<h1>ahoy</h1>';
            // $scope.player = $sce.trustAsHtml('<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13158665&show_artwork=true"></iframe>');
        });
    }]);
}
