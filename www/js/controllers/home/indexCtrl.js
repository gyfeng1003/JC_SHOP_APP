define(["app","js/services/allService", "js/services/dataDictService"], function (app) {
  app.controller("indexCtrl", ["$scope", "$state","dataDictService","allService","$util","$rootScope","$ionicModal",
    function ($scope, $state, dataDictService,allService,$util,$rootScope,$ionicModal) {
      $scope.dataDictService = dataDictService;
      $rootScope.menu = 'home';
      $rootScope.provinceCn = "河南";
      $rootScope.province = '';

      //跳转
      $rootScope.go = function(state,params){
        if(state == -1){
          history.back();
        }else{
          $state.go(state,params);
        }
      }

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

      $scope.subscribe = function(){
        $state.go("login", {loginSrc: 1});
      }

      $scope.searchProduct = function(){
        console.log("查询");
      }

    }]);
})
