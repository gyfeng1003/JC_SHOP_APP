define(["app"],function(app){
    app.service("homeService",[function(){
      //调用拨打电话
      this.call = function(phone){
        window.location.href = "tel:"+phone;
      }

    }]);
})
