define(["angular", "angularIonic"], function (angular) {
  var app = angular.module("app", ["ionic","ngCordova"]).run(['$ionicPlatform', '$rootScope', '$ionicActionSheet', '$timeout', '$cordovaAppVersion', '$ionicPopup', '$ionicLoading', '$cordovaFileTransfer', '$cordovaFile', '$cordovaFileOpener2',"allService",
    function ($ionicPlatform, $rootScope, $ionicActionSheet, $timeout, $cordovaAppVersion, $ionicPopup, $ionicLoading, $cordovaFileTransfer, $cordovaFile, $cordovaFileOpener2,allService) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      //定位城市
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var city = r.address.province;
          $ionicPopup.confirm({
            template: '您当前所在城市：'+ r.address.province+"<br/>是否切换？",
            cssClass: 'cityModal',
            buttons: [
              { text: '取消' },
              {
                text: '切换',
                onTap: function(e) {
                  $rootScope.provinceCn = city.substring(0,city.length-1);
                }
              }
            ]
          });
        }
        else {
          alert('failed'+this.getStatus());
        }
      },{enableHighAccuracy: true});

     /* if(ionic.Platform.isAndroid()){
        allService.appVersions({},function (data) {
          checkUpdate(data.version,data.content.replace(/\|/g,'</br>'));
        }, function (error) {
        });
      }else if(ionic.Platform.isIOS()){
        allService.appVersions({},function (data) {
          checkUpdate(data.version,data.content.replace(/\|/g,'</br>'));
        }, function (error) {
        });
      }*/
    });

    // 检查更新
    function checkUpdate(serverAppVersion, message) {
      try {
        //获取版本
        $cordovaAppVersion.getAppVersion().then(function (version) {
          //如果本地与服务端的APP版本不符合
          if (version < serverAppVersion) {
            if(ionic.Platform.isAndroid()){
              showUpdateConfirm(message);
            }else if(ionic.Platform.isIOS()){
              shouIOSUpdateConfirm();
            }
          }
        });
      } catch (ex) {
        alert(ex.toString());
      }
    }
    //显示是否更新对话框
    function shouIOSUpdateConfirm(){
      $ionicPopup.confirm({
        title: '版本升级',
        template: "检测到有新版本,请到商店下载最新版本。", //从服务端获取更新的内容
        cancelText: '取消',
        okText: '确定'
      });
    }
    // 显示是否更新对话框
    function showUpdateConfirm(message) {
      var confirmPopup = $ionicPopup.confirm({
        title: '版本升级',
        template: message, //从服务端获取更新的内容
        cancelText: '取消',
        okText: '升级'
      });
      confirmPopup.then(function (res) {
        if (res) {
          $ionicLoading.show({
            template: "已经下载：0%"
          });
          var url = "http://192.168.1.151:8080/TMS/version/download.shtml"; //可以从服务端获取更新APP的路径
          var targetPath = "///storage/emulated/0/Download/ZHWL.apk"; //APP下载存放的路径，可以使用cordova file插件进行相关配置
          var trustHosts = true
          var options = {};
          $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
            // 打开下载下来的APP
            $cordovaFileOpener2.open(result.toURL(), 'application/vnd.android.package-archive'
            ).then(function () {
              // 成功
            }, function (err) {
              // 错误
            });
            $ionicLoading.hide();
          }, function (err) {
            alert('下载失败' + JSON.stringify(err));
            return false;
          }, function (progress) {
            //进度，这里使用文字显示下载百分比
            $timeout(function () {
              var downloadProgress = (progress.loaded / progress.total) * 100;
              $ionicLoading.show({
                template: "已经下载：" + Math.floor(downloadProgress) + "%"
              });
              if (downloadProgress > 99) {
                $ionicLoading.hide();
              }
            })
          });
        } else {
          // 取消更新
        }
      });
    }
    //ionic与http配置
  }]).config(function ($httpProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.forwardCache(true);//开启全局缓存
    $ionicConfigProvider.platform.android.tabs.position("bottom");//设置安卓tab栏在底部
    $ionicConfigProvider.tabs.style('standard');//设置tab的样式
    //设置请求头信息
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //设置参数转换规则
    $httpProvider.defaults.transformRequest = [function (data) {
      /**
       * The workhorse; converts an object to x-www-form-urlencoded serialization.
       * @param {Object} obj
       * @return {Str ing}
       */
      var param = function (obj) {
        var query = '';
        var name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
          value = obj[name];

          if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
              subValue = value[i];
              //fullSubName = name + '[' + i + ']';
              fullSubName = name;
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value instanceof Object) {
            for (subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value !== undefined && value !== null) {
            query += encodeURIComponent(name) + '='
              + encodeURIComponent(value) + '&';
          }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
      };
      return angular.isObject(data) && String(data) !== '[object File]'
        ? param(data)
        : data;
    }];
    //配置app继承机制
  }).config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
      app.controller = $controllerProvider.register;
      app.directive = $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory = $provide.factory;
      app.service = $provide.service;
      app.constant = $provide.constant;
      //loading统一处理
    }]).config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('loadingService');
  }]).filter("count", function () {
    return function (v1, v2) {
      var countValue =0;
      v2 = v2 || [];
      angular.forEach(v2, function (val) {
        if (angular.isDefined(val) && val != "" && val != null) {
          countValue += parseFloat(val);
        }
      });
      return countValue;
    };
  });
  app.factory("loadingService", function ($injector) {
    return {
      request: function (config) {
        if (config.url.toString().indexOf('http://') === 0) {
          $injector.get('$ionicLoading').show({
            template: '数据加载中.....',
            //      noBackdrop:true //指示器不显示
            duration: 22000
          });
        }
        return config;
      },
      response: function (response) {
        $injector.get('$ionicLoading').hide();
        return response;
      }
    };
  });
  app.directive('status', function () {
    return {
      restrict: 'A',
      scope: {
        status: '@'
      },
      link: function (scope, element, attrs) {
        if (attrs.status == 'true') {
          var inputs = element[0].getElementsByTagName("input");
          var btns = element[0].getElementsByTagName("button");
          for (var i = 0; i < inputs.length; i++) {
            angular.element(inputs[i]).attr('disabled', attrs.status);
          }
          for (var i = 0; i < btns.length; i++) {
            angular.element(btns[i]).unbind();
          }
        }
      }
    }
  });

  app.directive('scrollHeight', function ($window) {
    return {
      restrict: 'AE',
      link: function (scope, element, attr) {
        element[0].style.height = ($window.innerHeight - 44 - 49) + 'px';
      }
    }
  })
/*
  app.directive('qrcode', function($state,$rootScope) {
    return {
      restrict:'E',
      replace:true,
      scope:{
        text:'='
      },
      template:'<div></div>',
      link:function(scope, element, attrs, ctrls){
        element = $(element[0]);

        var options = {
          width:attrs.size||160,
          height:attrs.size||160,
          text:scope.text
        };

        require(['jqueryQrcode'],function(echarts){
          if(scope.text){
            options.text = scope.text;
            element.qrcode(options);
          }
          scope.$watch('text',function(newValue){
            element.empty();
            if(newValue){
              options.text = newValue;
              element.qrcode(options);
            }
          });
          element.click(function(){
            if(attrs.state){
              $state.go(attrs.state);
            }ionic
          });
        });
      }
    };
  });*/

//app.constant('remoteUrl', 'http://101.227.76.157/ZHWL/');
 app.constant('remoteUrl', 'http://192.168.1.253:8080/ZHWL/');
// app.constant('remoteUrl', 'http://192.168.1.114:8080/TMS/');
  return app;
})
