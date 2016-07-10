module.exports=function(app){
  app.controller("headerController", function ($scope){
    $scope.users = {
      name: ''
    };
  });
};
