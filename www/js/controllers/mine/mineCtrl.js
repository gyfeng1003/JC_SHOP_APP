define(["app","js/services/allService"], function (app) {
  app.controller("mineCtrl", ["$scope", "$state","allService","$util","$rootScope",
    function ($scope, $state,allService,$util,$rootScope) {
        $rootScope.menu = 'mine';

        //点击登录
        $scope.imgselect = function(){
          $state.go("login");
        }

        $(".list .tabItem .col").click(function(){
            $(this).siblings().removeClass("activeStatus");
            $(this).addClass("activeStatus");
           /* var tabValue = $(this).html();
            if(angular.equals(tabValue, "全部")){
              $scope.orderStatus = "1";
            }
            else if (angular.equals(tabValue, "待付款")){
              $scope.orderStatus = "2";
            }
            else if (angular.equals(tabValue, "待发货")){
              $scope.orderStatus = "3";
            }
            else if (angular.equals(tabValue, "待收货")){
              $scope.orderStatus = "4";
            }else{
              $scope.orderStatus = "5";
            }*/
            $scope.$apply();
        });
    }]);
})
