define(["app", "js/services/homeService","js/services/allService","js/services/Modal"], function (app) {
  app.controller("forgetPwdCtrl", ["$scope","$localStorage", "homeService","allService","$state","Modal","$interval","$stateParams",
    function ($scope,$localStorage, homeService,allService,$state,Modal,$interval,$stateParams) {
      $scope.vphone = {};
      $scope.paracont = "获取验证码";
      $scope.paraclass = "enable-pointer-events";
      $scope.pwd = {};
      $scope.phoneNum = $stateParams.phoneNumber;

      //下一步
      $scope.validateAccount = function () {
          allService.validateAccount($scope.vphone, function(data){
            if(angular.equals(data.code, "0")){
              $state.go("resetPwd", {phoneNumber: $scope.vphone.phoneNumber});
            }
            else {
              Modal.alert(data.retMsg);
            }
          }, function(error){
            Modal.alert("网络请求异常！");
          });
      }


      //获取验证码
      $scope.sendPhonecode = function(){
        if($scope.vphone.phoneNumber == null || !$scope.vphone.phoneNumber.match(/\d{11}/)){
          Modal.alert("请输入正确格式的手机号码！");
          return;
        }

        allService.smsrandcode({phoneNumber: $scope.vphone.phoneNumber},function(data){
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
      }

      //确认修改
      $scope.resetPwd = function(){
        if(!angular.equals($scope.pwd.newPassword, $scope.pwd.againPassword)){
            Modal.alert("密码与确认密码不一致！");
            return;
        }
        $scope.pwd.phoneNumber = $scope.phoneNum;
        allService.resetPwd($scope.pwd, function (data) {
            if(angular.equals(data.code, "0")){
                Modal.alert("修改成功，请登录！");
                $state.go("login");
            }
            else {
                Modal.alert(data.retMsg);
            }
        }, function(error){
            Modal.alert("网络请求异常！");
        });
      }

  }]);
})
