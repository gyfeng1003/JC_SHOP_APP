define(["app"],function(app){
    app.service("allService",["$http","remoteUrl", function($http, urlzyb){

      //登录接口方法
      this.login=function(param,success,error){
        return $http.post(urlzyb+"user/userLogin.shtml",param).success(success).error(error);
      };
      //注册 发送验证码
      this.smsrandcode = function (param1, success, error) {
        return $http.post(urlzyb + "customer/identifyingCode.shtml", param1).success(success).error(error);
      }

      //获取版本
      this.appVersions=function(param,success,error){
        return $http.post(urlzyb+"version/getVersion.shtml",param).success(success).error(error);
      }
    }]);
})
