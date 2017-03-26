var ok1 = false;
var ok2 = false;
var ok3 = false;
var ok4 = false;
var ok5 = false;
$(function() {
    //验证手机
    $("#phone").on("blur", function() {
        var reg = /^1\d{10}$/; // 正则
        var phone = $("#phone").val();
        if (phone == "") {
            $("#phonespan").html("手机号不能为空！").css({ "color": "red" });
            $("#phone").addClass('error');
            $("#phonespan").removeClass("right");
            return ok1 = false;
        } else if (reg.test(phone)) {
            $("#phonespan").addClass("right");
            $("#phonespan").html(" ");
            $("#phone").removeClass("error");
            return ok1 = true;
        } else {
            $("#phonespan").html("输入错误").css({ "color": "red" });
            $("#phone").addClass('error');
            $("#phonespan").removeClass("right");
            return ok1 = false;
        }
    });

    //验证密码
    $("#pwd").on("blur", function() {
        var reg = /^\d{6,10}$/i;
        var pwd = $("#pwd").val();
        if (pwd == "") {
            $("#pwdspan").html("密码不能为空！").css({ "color": "red" });
            $("#pwd").addClass('error');
            $("#pwdspan").removeClass("right");
            return ok2 = false;
        } else if (reg.test(pwd)) {
            $("#pwdspan").addClass("right");
            $("#pwdspan").html(" ");
            $("#pwd").removeClass("error");
            return ok2 = true;
        } else {
            $("#pwdspan").html("输入错误").css({ "color": "red" });
            $("#pwd").addClass('error');
            $("#pwdspan").removeClass("right");
            return ok2 = false;
        }
    });

    //验证重复确认密码
    $("#repwd").on("blur", function() {
        var repwd = $("#repwd").val();
        var pwd = $("#pwd").val();
        if (repwd == "") {
            $("#repwdspan").html("确认密码为空！").css({ "color": "red" });
            $("#repwd").addClass('error');
            $("#repwdspan").removeClass("right");
            return ok3 = false;
        } else if (repwd == pwd) {
            $("#repwdspan").addClass("right");
            $("#repwdspan").html(" ");
            $("#repwd").removeClass("error");
            return ok3 = true;
        } else {
            $("#repwdspan").html("与密码不一致！").css({ "color": "red" });
            $("#repwd").addClass('error');
            $("#repwdspan").removeClass("right");
            return ok3 = false;

        }
    });

    //验证邮箱
    $("#email").on("blur", function() {
        var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/; // 正则
        var email = $("#email").val();
        if (email == "") {
            $("#emailspan").html("邮箱不能为空！").css({ "color": "red" });
            $("#email").addClass('error');
            $("#emailspan").removeClass("right");
            return ok4 = false;

        } else if (reg.test(email)) {
            $("#emailspan").addClass("right");
            $("#emailspan").html(" ");
            $("#email").removeClass("error");
            return ok4 = true;
        } else {
            $("#emailspan").html("输入错误").css({ "color": "red" });
            $("#email").addClass('error');
            $("#emailspan").removeClass("right");
            return ok4 = false;

        }
    });

    //验证验证码
    $("#picture").on("blur", function() {
        var str = "nodick";
        var pic = $("#picture").val();
        if (str == pic) {
            $("#changeone").hide();
            $("#picspan").html(" ")
            $("#picspan").addClass("right");
            $("#picture").removeClass("error");
            return ok5 = true;
        } else {
            $("#picspan").html("输入错误").css({ "color": "red" });
            // $("#picspan").addClass('error');
            $("#picture").removeClass("right");
            return ok5 = false;
        }
    });

    //复选框按钮
    $("#submit").attr('disabled', 'disabled');
    $('input[type="checkbox"]').on("click", function() {
        if ($('input[type="checkbox"]').prop('checked')) {
            $("#submit").css({ "background": "#ff9000" });
            $("#submit").removeAttr('disabled');
        } else {
            $("#submit").attr('disabled', 'disabled');
            $("#submit").css({
                "background": "gray"
            });
        }
    });
    //表单提交
    //点击申请注册按钮进行注册
    $("#submit").on("click", function() {
        if (ok1 && ok2 && ok3 && ok4 && ok5) {
            var count = localStorage.count;
            if (!count) {
                count = 1;
            } else {
                count++;
            }
            localStorage.setItem("phone" + count, $("#phone").val());
            localStorage.setItem("password" + count, $("#pwd").val());
            localStorage.setItem("email" + count, $("#email").val());
            localStorage.setItem("count", count);
            $("#submit").html("正在注册中...");
            setTimeout(function() {
                $("#myform").submit();
                location.href = "logo.html";
            }, 2000);
            //console.log(localStorage);
        } else {
            alert("注册失败");
        }
    });
});
