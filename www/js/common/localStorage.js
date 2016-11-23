/*控制器传参公用服务*/
define(["app"], function (app) {
  app.factory("$localStorage", ["$window", function ($window) {
    return {
      set: function (key, value) {//添加
        $window.localStorage.setItem(key,value);
      },
      get: function (key) {//获取
        return $window.localStorage.getItem(key);
      },
      setObject: function (key, value) {//添加
        $window.localStorage.setItem(key,JSON.stringify(value));
      },
      getObject: function (key) {//获取
        return JSON.parse($window.localStorage.getItem(key));
      },
      getAndRemove:function(key){//获取并删除
         var value=$window.localStorage.getItem(key);
         $window.localStorage.removeItem(key);
         return value;
      },
      getObjAndRemove:function(key){//获取并删除
         var value=JSON.parse($window.localStorage.getItem(key));
         $window.localStorage.removeItem(key);
         return value;
      }
    }
  }]);
})
