module.exports=function(app){
  app.controller("headerController", ["$scope", "loginService", function ($scope, loginService){
    $scope.name = loginService.getUserName();
    $scope.tab = loginService.getUserTab();
  }]);
};
