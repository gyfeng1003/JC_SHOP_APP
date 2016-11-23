define(["app","angularAMD"],function(app,angularAMD){
  app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

    $stateProvider.state("tab.mine",angularAMD.route({
      url:"/mine",
      cache: false,
      templateUrl:"view/person/mine.html",
      controllerUrl:"js/controllers/mine/mineCtrl",
      controller:"mineCtrl"
    })).state("login",angularAMD.route({
      url:"/login/:loginSrc",
      cache: false,
      templateUrl:"view/login/login.html",
      controllerUrl:"js/controllers/mine/loginCtrl",
      controller:"loginCtrl"
    })).state("register",angularAMD.route({
      url:"/register",
      cache: false,
      templateUrl:"view/login/register.html",
      controllerUrl:"js/controllers/mine/loginCtrl",
      controller:"loginCtrl"
    })).state("forgetPwd", angularAMD.route({
      url: "/forgetPwd",
      templateUrl: "view/login/forgetPwd.html",
      controllerUrl: "js/controllers/mine/forgetPwdCtrl",
      controller: "forgetPwdCtrl"
    })).state("subscribeDetail", angularAMD.route({
      url: "/subscribeDetail",
      templateUrl: "view/person/subscribeDetail.html",
      controllerUrl: "js/controllers/mine/subscribeDetailCtrl",
      controller: "subscribeDetailCtrl"
    })).state("evaluate", angularAMD.route({
      url: "/evaluate",
      templateUrl: "view/person/evaluate.html",
      controllerUrl: "js/controllers/mine/evaluateCtrl",
      controller: "evaluateCtrl"
    })).state("setting", angularAMD.route({
      url: "/setting",
      templateUrl: "view/person/setting.html",
      controllerUrl: "js/controllers/mine/settingCtrl",
      controller: "settingCtrl"
    })).state("accountInfo", angularAMD.route({
      url: "/accountInfo",
      templateUrl: "view/person/accountInfo.html",
      controllerUrl: "js/controllers/mine/accountInfoCtrl",
      controller: "accountInfoCtrl"
    }))

  }]);
})
