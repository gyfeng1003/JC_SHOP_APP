(function ($) {
    //默认参数
    var PARAMS;
    var DEFAULTPARAMS = { Title: "素材家园", Content: "", Width: 400, Height: 300, URL: "", ConfirmFun: new Object, CancelFun: new Object };
    var ContentWidth = 0;
    var ContentHeight = 0;
    $.DialogBySHF = {
        //弹出提示框
        Alert: function (params) {
            Show(params, "Alert");
        },
        //弹出确认框
        Confirm: function (params) { Show(params, "Confirm"); },
        //弹出引用其他URL框
        Dialog: function (params) { Show(params, "Dialog") },
        //关闭弹出框
        Close: function () {
            $("#DialogBySHFLayer,#DialogBySHF").remove();
        }

    };
    //初始化参数
    function Init(params) {
        if (params != undefined && params != null) {
            PARAMS = $.extend({},DEFAULTPARAMS, params);
        }
        ContentWidth = PARAMS.Width - 10;
        ContentHeight = PARAMS.Height - 40;
    };
    //显示弹出框
    function Show(params, caller) {
        Init(params);
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        //在屏幕中显示的位置（正中间）
        var positionLeft = (screenWidth - PARAMS.Width) / 2 + $(document).scrollLeft();
        var positionTop = (screenHeight - PARAMS.Height) / 2 + $(document).scrollTop();
        var Content = [];
        Content.push("<div id=\"DialogBySHFLayer\"></div>");
        Content.push("<div id=\"DialogBySHF\" style=\"width:" + PARAMS.Width + "px;height:" + PARAMS.Height + "px;left:" + positionLeft + "px;top:" + positionTop + "px;\">");
        Content.push("    <div id=\"Title\"><span>" + PARAMS.Title + "</span><span id=\"Close\">&#10005;</span></div>");
        Content.push("    <div id=\"Container\" style=\"width:" + ContentWidth + "px;height:" + ContentHeight + "px;\">");
        if (caller == "Dialog") {
            Content.push("<iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" src=\"" + PARAMS.URL + "\" ></iframe>");
        }
        else {
            var TipLineHeight = ContentHeight - 60;
            Content.push("        <table>");
            Content.push("            <tr><td id=\"TipLine\" style=\"height:" + TipLineHeight + "px;\">" + PARAMS.Content + "</td></tr>");
            Content.push("            <tr>");
            Content.push("                <td id=\"BtnLine\">");
            Content.push("                    <input type=\"button\" id=\"btnDialogBySHFConfirm\" value=\"确定\" />");
            if (caller == "Confirm") {
                Content.push("                    <input type=\"button\" id=\"btnDialogBySHFCancel\" value=\"取消\" />");
            }
            Content.push("                </td>");
            Content.push("            </tr>");
            Content.push("        </table>");
        }
        Content.push("    </div>");
        Content.push("</div>");
        $("body").append(Content.join("\n"));
        SetDialogEvent(caller);
    }
    //设置弹窗事件
    function SetDialogEvent(caller) {
        //添加按钮关闭事件
        $("#DialogBySHF #Close").click(function () { $.DialogBySHF.Close();});
         //添加ESC关闭事件
        $(window).keydown(function(event){
            var event = event||window.event;
            if(event.keyCode===27){
                $.DialogBySHF.Close();
            }
        });
        //添加窗口resize时调整对话框位置
        $(window).resize(function(){
            var screenWidth = $(window).width();
            var screenHeight = $(window).height();
            var positionLeft = parseInt((screenWidth - PARAMS.Width) / 2+ $(document).scrollLeft());
            var positionTop = parseInt((screenHeight - PARAMS.Height) / 2+ $(document).scrollTop());
            $("#DialogBySHF").css({"top":positionTop+"px","left":positionLeft+"px"});
        });

        if (caller != "Dialog") {
            $("#DialogBySHF #btnDialogBySHFConfirm").click(function () {
                $.DialogBySHF.Close();
                if ($.isFunction(PARAMS.ConfirmFun)) {
                    PARAMS.ConfirmFun();
                }
            })
        }
        if (caller == "Confirm") {
            $("#DialogBySHF #btnDialogBySHFCancel").click(function () {
                $.DialogBySHF.Close();
                if ($.isFunction(PARAMS.CancelFun)) {
                    PARAMS.CancelFun();
                }
            })
        }
    }
})(jQuery);
