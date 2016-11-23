define(["app","js/services/allService", "js/services/dataDictService"], function (app) {
  app.controller("subscribeCtrl", ["$scope","$rootScope", "$state","allService","$util","$ionicModal","dataDictService",
    function ($scope,$rootScope, $state,allService,$util,$ionicModal,dataDictService) {
      $rootScope.menu = "subscribe";
      $scope.content = 1;
     /* $scope.dataDictService = dataDictService;
      $scope.provinceCn = "选择城市";
      $scope.province = '';*/

     /* if (!$scope.cityModal){
        $ionicModal.fromTemplateUrl('view/home/cities.html', {
          scope: $scope
        }).then(function (modal) {
          $scope.cityModal = modal;
        });
      }
      $scope.selectCity = function(){
        $scope.cityModal.show();
      }
      //关闭
      $scope.close = function(){
        $scope.cityModal.hide();
      }
      //选择城市
      $scope.chooseCity = function(province){
        $scope.provinceCn = province.text;
        $scope.province = province.value;
        $scope.cityModal.hide();
      }*/

      $(".head .col-33").click(function(){
        $(this).siblings().removeClass("activeStatus");
        $(this).addClass("activeStatus");
        var tabValue = $(this).html();
        if(angular.equals(tabValue, "未预约")){
          $scope.content = 1;
        }
        else if (angular.equals(tabValue, "已预约")){
          $scope.content = 2;
        }
        else{
          $scope.content = 3;
        }
        $scope.$apply();
      });

    }]);
})
