define(["app","angularAMD"],function(app,angularAMD){
  app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tab", angularAMD.route({
      url: "/tab",
      templateUrl: "view/tabs.html",
      controllerUrl: "js/controllers/menuCtrl",
      controller: "menuCtrl"
    })).state("home", angularAMD.route({
      url: "/home",
      cache: false,
      templateUrl: "view/home/home.html",
      controllerUrl: "js/controllers/home/homeCtrl",
      controller: "homeCtrl"
    }));

    $stateProvider.state("serviceProduct",angularAMD.route({
      url:"/serviceProduct",
      cache: false,
      templateUrl:"view/home/moreService.html",
      controllerUrl:"js/controllers/home/serviceProductCtrl",
      controller:"serviceProductCtrl"
    })).state("dayService",angularAMD.route({
      url:"/dayService",
      cache: false,
      templateUrl:"view/home/dayService.html",
      controllerUrl:"js/controllers/home/serviceProductCtrl",
      controller:"serviceProductCtrl"
    })).state("productDetail",angularAMD.route({
      url:"/productDetail",
      cache: false,
      templateUrl:"view/home/productDetail.html",
      controllerUrl:"js/controllers/home/productDetailCtrl",
      controller:"productDetailCtrl"
    })).state("scanScan",angularAMD.route({
      url:"/scanScan",
      cache: false,
      templateUrl:"view/home/scanScan.html",
      controllerUrl:"js/controllers/home/homeCtrl",
      controller:"homeCtrl"
    })).state("activity",angularAMD.route({
      url:"/activity",
      cache: false,
      templateUrl:"view/home/activity.html",
      controllerUrl:"js/controllers/home/activityCtrl",
      controller:"activityCtrl"
    })).state("index",angularAMD.route({
      url:"/index",
      cache: false,
      templateUrl:"view/home/index.html",
      controllerUrl:"js/controllers/home/indexCtrl",
      controller:"indexCtrl"
    }))

    $urlRouterProvider.otherwise("index");
  }]);
})
