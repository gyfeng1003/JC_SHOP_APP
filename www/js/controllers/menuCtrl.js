define(["app","js/services/allService"], function (app) {
  app.controller("menuCtrl", [ "$scope","$rootScope","$util",
    function ($scope,$rootScope,$util) {
     /*   $rootScope.menu = 'mine';*/
      $scope.buy = function(){
        if (!angular.equals($util.getPhone(),'')){
            $rootScope.go("tab.shopCar");
        }
        else{
            $rootScope.go("login",{loginSrc: 2});
        }
      }

      $scope.subscribe = function(){
        if (!angular.equals($util.getPhone(),'')){
          $rootScope.go("tab.subscribe");
        }
        else{
          $rootScope.go("login", {loginSrc: 1});
        }
      }
    }]);
})
