define(["app","js/services/allService","js/services/Modal"], function (app) {
  app.controller("loginCtrl", ["$scope","allService","$localStorage","$rootScope","$interval","Modal","$stateParams",
    function ($scope,allService,$localStorage,$rootScope,$interval,Modal,$stateParams) {
      $scope.loginUser = {};
      $scope.paracont = "获取验证码";
      $scope.paraclass = "enable-pointer-events";
      $scope.loginSrc = $stateParams.loginSrc;

      //获取验证码
      $scope.sendPhonecode = function(){
          $scope.paraclass = "disable-pointer-events";
          var second = 60;
          var timePromise = $interval(function(){
            if(second<=0){
              $interval.cancel(timePromise);
              timePromise = undefined;
              second = 60;
              $scope.paracont = "重发验证码";
              $scope.paraclass = "enable-pointer-events";
            }else{
              $scope.paracont = second + "秒后可重发";
              second--;
            }
          },1000,100);

         /* if($scope.registUser.phoneNumber == null || !$scope.registUser.phoneNumber.match(/\d{11}/)){
            Modal.alert("请输入正确格式的手机号码");
            return;
          }*/

          allService.smsrandcode({phoneNumber: $scope.registUser.phoneNumber},function(data){
            if(angular.equals(data.code,'0')){
              Modal.alert("验证码已发送至您输入的手机号,有效期3分钟");
              return;
            }
            else{
              Modal.alert("验证码获取失败,请重新获取");
              $interval.cancel(timePromise);
              timePromise = undefined;
              second = 60;
              $scope.paracont = "重发验证码";
              $scope.paraclass = "enable-pointer-events";
              return;
            }
          },function(error){
              Modal.alert("网络请求异常");
          });

        }

        $scope.confirmLogin = function(){
          $localStorage.setObject("loginUser",$scope.loginUser);
          $rootScope.isLogin = true;
          if(angular.equals($scope.loginSrc, '1')){
              $rootScope.go("tab.subscribe");
          }else if(angular.equals($scope.loginSrc, '2')){
              $rootScope.go("tab.shopCar");
          }else{
              $rootScope.go("tab.mine");
          }
        }
    }]);
})
