$(document).ready(function () {


    var delayCount = 0;
    $(".home").children().each(function () {
        $(this).delay(delayCount).animate({ opacity: "1" }, "150ms");
        delayCount += 150;
    });


    var sec1 = $("#section1").offset().top;
    var sec2 = $("#section2").offset().top;
    var sec3 = $("#section3").offset().top;
    var sec4 = $("#section4").offset().top;

    $(window).on('scroll', function (e) {
        var current_scroll_position = $(window).scrollTop();


        if (current_scroll_position >= 0 && current_scroll_position <= (sec1 + 250)) {
            var delayCount = 0;
            $(".home").children().each(function () {
                $(this).delay(delayCount).animate({ opacity: "1" }, "150ms");
                delayCount += 150;
            });
        } else {

            $(".home").children().each(function () {
                $(this).stop();
                $(this).css({ opacity: 0 });
            });
        }

        if (current_scroll_position >= sec2 - 650 && current_scroll_position <= sec2 + 250) {

            $(".am").animate({ transform: "translateY(-40vh)", opacity: 1 }, 1000);
        }
        else {
            $(".am").stop();
            $(".am").css({ transform: "translateY(0)", opacity: 0 });
        }


        if (current_scroll_position >= sec3 - 650 && current_scroll_position <= sec3 + 250) {


            //처음 등장 애니메이션
            $(".ab").animate({ transform: "translateY(-40vh)", opacity: 1 }, 1000);

            /*skills width animation*/
            $("#jsskill").animate({ width: "50%", opacity: 1 }, 1000);
            $("#htmlskill").animate({ width: "50%", opacity: 1 }, 1000);
            $("#jqskill").animate({ width: "20%", opacity: 1 }, 1000);
            $("#javaskill").animate({ width: "70%", opacity: 1 }, 1000);
            $("#dbskill").animate({ width: "60%", opacity: 1 }, 1000);

        }
        else {
            $(".ab").stop();
            $(".ab").css({ transform: "translateY(0)", opacity: 0 });
            $("#jsskill").stop();
            $("#jsskill").width(0);
            $("#jqskill").stop();
            $("#jqskill").width(0);
            $("#javaskill").stop();
            $("#javaskill").width(0);
            $("#dbskill").stop();
            $("#dbskill").width(0);
        }


        if (current_scroll_position >= sec4 - 750) {

            $(".portarti").each(function (i) {

                var portarti_pos = $(this).offset().top;


                if (current_scroll_position >= portarti_pos - 700) {
                    if (i % 2 == 0) {
                        $(this).animate({ transform: "translateX(-100px) scale(1)" }, 1000);
                    }
                    else {
                        $(this).animate({ transform: "translateX(100px) scale(1)" }, 1000);

                    }
                }
            });
        } else {
            $(".portarti").each(function (i) {
                $(this).stop();
                if (i % 2 == 0) {
                    $(this).css({ transform: "translateX(-1200px) scale(0.5)" }, 1000);
                }
                else {
                    $(this).css({ transform: "translateX(1200px) scale(0.5)" }, 1000);

                }
            });
        }

    });



    //처음 인사 애니메이션 한글자씩 나옴

    //이메일 부분 클릭하면 이메일 복사하기
    $("#myemail").on('click', function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        $temp.remove();
        alert('클립보드에 복사되었습니다');
    });


    //nav 탭 클릭하면 해당 부분으로 스크롤 이동
    $("#home").click(function () {

        $('html, body').animate({ scrollTop: 0 }, "2s");

        //home 위치로 이동해서 애니메이션 다시 재생

        //현재 선택된 탭 활성화 및 다른 부분 비활성화
        $(this).addClass("current_select");
        $("#aboutme").removeClass("current_select");
        $("#ability").removeClass("current_select");
        $("#portfolio").removeClass("current_select");


    });


    $("#aboutme").click(function () {
        $('html, body').animate({ scrollTop: sec2 - 60 }, "2s");

        $(this).addClass("current_select");
        $("#home").removeClass("current_select");
        $("#ability").removeClass("current_select");
        $("#portfolio").removeClass("current_select");


    });
    $("#ability").click(function () {
        $('html, body').animate({ scrollTop: sec3 - 60 }, "2s");


        $(this).addClass("current_select");
        $("#aboutme").removeClass("current_select");
        $("#home").removeClass("current_select");
        $("#portfolio").removeClass("current_select");

    });
    $("#portfolio").click(function () {

        $('html, body').animate({ scrollTop: sec4 - 80 }, "2s");

        $(this).addClass("current_select");
        $("#aboutme").removeClass("current_select");
        $("#ability").removeClass("current_select");
        $("#home").removeClass("current_select");

    });

});

