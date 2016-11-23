define(["app","js/services/allService", "js/services/dataDictService"], function (app) {
  app.controller("homeCtrl", ["$scope", "$state","dataDictService","allService","$util","$rootScope","$ionicModal",
    function ($scope, $state, dataDictService,allService,$util,$rootScope,$ionicModal) {
      $scope.dataDictService = dataDictService;
     /* $rootScope.menu = 'home';*/
    /*  $scope.provinceCn = "选择城市";
      $scope.province = '';*/

      if (!$scope.cityModal){
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
        $rootScope.provinceCn = province.text;
        $rootScope.province = province.value;
        $scope.cityModal.hide();
      }


      $scope.scanBarcode = function(){
        $state.go("scanScan");
      }
    }]);
})
