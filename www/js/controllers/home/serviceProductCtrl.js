define(["app","js/services/allService"], function (app) {
  app.controller("serviceProductCtrl", ["$scope", "$state","allService","$util","$rootScope","$ionicModal",
    function ($scope, $state,allService,$util,$rootScope,$ionicModal) {

      $(".list .condition .col").click(function(){
          $(this).siblings().removeClass("activeStatus");
          $(this).addClass("activeStatus");
          $scope.$apply();
      });

    }]);
})
