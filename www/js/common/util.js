/**
 * 常用公用工具类
 */
define(["app"], function (app) {
/*  var menus={"9901":'<a ui-sref="getKey"><img src="img/index_icon_14.png"></a><div class="words">钥匙管理</div>',
    "9902":' <a ui-sref="mainLineVehicleTask" ><img src="img/index_icon_2.png"></a><div class="words">干线中转任务</div>',
    "9903":'<a ui-sref="unloadingList"><img src="img/index_icon_11.png"></a><div class="words">卸车</div>',
    "9904":'<a ui-sref="bookingCarList"><img src="img/index_icon_4.png"></a><div class="words">约车信息</div>',
    "9905":'<a ui-sref="stayBillList"><img src="img/index_icon_7.png"></a><div class="words">待开运单</div>',
    "9906":' <a ui-sref="modifyBillList"><img src="img/index_icon_8.png"></a><div class="words">更改单列表</div>',
    "9909":'<a ui-sref="priceCalc"><img src="img/index_icon_6.png"></a><div class="words">价格计算器</div>',
    "9910":'<a ui-sref="" ><img src="img/index_icon_10.png"></a><div class="words">装车送货</div>',
    "481010001":'<a><img src="img/index_icon_12.png"></a><div class="words">异常上报</div>'
  };*/
  app.factory("$util", function ($ionicActionSheet, $localStorage) {
    //拍照
    var camera = function (success, error) {//拍照
      if (!navigator.camera) {
        alert("照相功能不可用！");
        return false;
      }
      var options = {
        destinationType: "file://storage/sdcard0/Pictures",
        saveToPhotoAlbum: true   //保存进手机相册
      };
      navigator.camera.getPicture(success, error);
    }
    //选择图片
    var selectFile = function (success, error) {
      if (!window.imagePicker) {
        return alert('目前您的环境无法访问图片库!');
      }

      var options = {
        quality: 100,
        maximumImagesCount: 1,
        width: 256,
        height: 256
      };

      window.imagePicker.getPictures(success, error, options);
    }

    //文件上传
    var fileUpload = function (imgUrl, uploadUrl, success, error, params) {
      var ft = new FileTransfer();
      var options = new FileUploadOptions();
      options.fileKey = "file";
      options.fileName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
      options.mimeType = "image/jpeg";
      options.params = params;
      ft.upload(imgUrl, encodeURI(uploadUrl), success, error, options);
    }

    return {
      //获取登录人手机号
      getPhone: function () {
        return $localStorage.getObject("loginUser").phoneNumber || "";
      },
      //获取登录人密码
      getPassWord: function () {
        return $localStorage.getObject("loginUser").passWord || "";
      },
      //拆分数组
      split: function (str,symbol) {
        if (angular.isString(str)) {
          return str.split(symbol);
        } else {
          return new Array();
        }
      },
      //获取时间戳函数
      getTimestamp: function () {
        return new Date().getTime();
      },
      openCamera: function (openSuccess, openError, selectSuccess, selectError) {
        var options = {
          title: '上传图片',
          buttonLabels: ['拍照', '从相册中选择'],
          androidEnableCancelButton: true,
          addCancelButtonWithLabel: '取消'
        };
        window.plugins.actionsheet.show(options, function (btnIndex) {
          if (btnIndex == 1) {
            // 拍照上传
            return camera(openSuccess, openError);
          } else if (btnIndex == 2) {
            // 相册文件选择上传
            return selectFile(selectSuccess, selectError);
          }
        });
      },
      fileUpload: function (imgUrl, uploadUrl, success, error, params) {
        return fileUpload(imgUrl, uploadUrl, success, error, params);
      }
    }
  });

})
