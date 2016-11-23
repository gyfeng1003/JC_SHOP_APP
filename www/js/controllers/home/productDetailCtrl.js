define(["app","js/services/allService","js/services/Modal"], function (app) {
  app.controller("productDetailCtrl", ["$scope", "$state","allService","$util","$ionicSlideBoxDelegate","$ionicPopover","Modal",
    function ($scope, $state,allService,$util,$ionicSlideBoxDelegate,$ionicPopover,Modal) {
        $scope.imgUrls = ['img/demo.png','img/demo.png','img/demo.png','img/demo.png','img/demo.png'];
        $ionicSlideBoxDelegate.update();
        $scope.content = 1;

        $(".list .condition .col").click(function(){
            $(this).siblings().removeClass("activeStatus");
            $(this).addClass("activeStatus");

             var tabValue = $(this).html();
             if(angular.equals(tabValue, "商品")){
                $scope.content = 1;
             }
             else if (angular.equals(tabValue, "详情")){
                $scope.content = 2;
             }
             else{
                $scope.content = 3;
             }
             $scope.$apply();
        });

        if(!$scope.specModal){
          $ionicPopover.fromTemplateUrl('view/home/specModal.html', {
            scope: $scope,
            animation:'slide-in-left'
          }).then(function(popover) {
            $scope.specModal = popover;
          });
        }
        $scope.openSpecModal = function($event){
          $scope.specModal.show($event);
        }
        $scope.close = function(){
          $scope.specModal.hide();
          $scope.paramModal.hide();
        }

      if(!$scope.paramModal){
          $ionicPopover.fromTemplateUrl('view/home/specParam.html', {
            scope: $scope,
            animation:'slide-in-left'
          }).then(function(popover) {
            $scope.paramModal = popover;
          });
      }
      $scope.openParamModal = function($event){
        $scope.paramModal.show($event);
      }

      $scope.getSpec = function(spec,sid, pay, size){
        //当前规格 选中
        if(angular.equals(spec.isActive, true)){
          spec.isActive = !spec.isActive;
        }
        else{
          //未选中 先把其他规格 置 未选中 当前规格选中
          angular.forEach($scope.productSize, function(data){
            data.isActive = false;
          });
          spec.isActive = !spec.isActive;
        }
        $scope.spec = spec;
      }

      // 获取商品规格参数
      $scope.getProductSize =  function(){
          $scope.productSize = [{productSpce:'100ml'},{productSpce:'200ml'},{productSpce:'300ml'},{productSpce:'400ml'},{productSpce:'100ml'}];
          angular.forEach($scope.productSize, function(data){
            data.isActive = false;
        });
      };
      $scope.getProductSize();


      $scope.toBuy = function($event){
        if(!$scope.spec){
          Modal.alert("请选择规格参数");
          $scope.openParamModal($event);
          return;
        }
        else{
          $state.go("order");
        }
      }

    }]);
})
