$(function() {
    var count = localStorage.getItem("count");
    $("#phone").text(localStorage.getItem("phone" + count));

    $(".aler ul li:first-child").addClass("on");
    $(".login").show();
    $(".aler ul li").each(function(index) {
        $(this).click(function() {
            $(this).addClass("on").siblings().removeClass("on");
            $(".aler .wrap div").hide().eq(index).show();
        })
    })

    $("#btn-login").click(function() {
        $(".back").show();
        $(".aler").show();
    })
    $(".back").click(function() {
        $(".back").hide();
        $(".aler").hide();
    })


    $("#login-btn").click(function() {
        var count = localStorage.count;
        for (var i = 1; i <= count; i++) {
            var phone = localStorage.getItem("phone" + i);
            var pwd = localStorage.getItem("password" + i);
            if (($(".login #phone").val()==phone) && ($(".login #pwd").val()==pwd)) {
                $("#login-btn").submit();
            } else {
                $(".login form .error").show();
                return false;
            }
        }

    })
})
