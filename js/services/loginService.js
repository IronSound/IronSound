module.exports = function(app){
  //service stores user data
  app.factory('loginService', ['$http', function($http){
    let username = "";

    return {
      userLogin: function (name,password,tab){
        username = name;
        return $http({
          method: 'POST',
          url: '/login',
          data: {
            name: name,
            password: password,
            tab: 0,
          }
        }).then(function(response){
          console.log('getting the response', response);
          // username = name;
          console.log(username);
        })
      },
      getUserName: function (){
        return username;
      },
    }


  }])
}
