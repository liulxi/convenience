$(function() {
    //获取cookie中电话号码
    var count=localStorage.getItem("count");
    $("#cookiephone").text(localStorage.getItem("phone"+count));
    $("#cookiephone").css("color", "#ff9000");
    //生成四位验证码
    function codes() {
        var str = "";
        for (var i = 1; i <= 4; i++) {
            var n = Math.floor(Math.random() * 62);
            if (n < 10) {
                str += n;
            } else if (n < 36) {
                str += String.fromCharCode(n + 55);
            } else {
                str += String.fromCharCode(n + 61);
            }
        }
        return str;
    }
    $("#codeInfo").html(codes());

    //30秒倒计时
    function times() {
        i--;
        $("#newcode").val(i + "秒重新发送信息");
        $("#newcode").prop("disabled", true);
        if (i <= 0) {
            i = 1;
            $("#codeInfo").html(codes());
            $("#newcode").val("重新发送短信");
            clearInterval(timer);
            $("#newcode").prop("disabled", false);
        }
    }
    //重新获取新的验证码
    $("#newcode").on("click", function() {
        i = 6;
        $("#newcode").prop("disabled", true);
        timer = setInterval(times, 1000);
    });
    //点击提交
    $("#submit").on("click", function() {
        if ($("#inputCode").val().toLowerCase() == $("#codeInfo").text().toLowerCase()) {
            location.href = "enter.html"
        } else {
            $("#codeInfo").html("输入不正确").css("color", "#ff9000");
        }
    });
});
