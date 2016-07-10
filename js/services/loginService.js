module.exports = function(app){



  //service stores user data
  app.factory('loginService', ['$http', function($http){


    return {
      userLogin: function (name,password,tab){
        console.log(name, password);
        $http({
          method: 'POST',
          url: '/login',
          data: {
            username: name,
            password: password,
            tab: 0,
          }
        }).then(function(response){
          console.log('getting the response', response);
        })
      }
    }


  }])
}
