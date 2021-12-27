$(document).ready(function () {


    //맨 처음 home화면 글자 애니메이션
    var delayCount = 0;
    $(".home").children().each(function () {
        $(this).delay(delayCount).animate({ opacity: "1" }, "150ms");
        delayCount += 150;
    });


    //각 영역별 위치값 가져오기
    var sec1 = $("#section1").offset().top;
    var sec2 = $("#section2").offset().top;
    var sec3 = $("#section3").offset().top;
    var sec4 = $("#section4").offset().top;



    //스크롤 이벤트 발생 
    $(window).on('scroll', function (e) {

        //현재 스크롤 위치 가져옴
        var current_scroll_position = $(window).scrollTop();

        //각 section영역에 도달하면 해당영역 애니메이션 실행, 각 영역을 벗어나면 애니메이션을 멈춤 + 원래 모습으로 변경
        //section1
        if (current_scroll_position >= 0 && current_scroll_position <= (sec1 + 250)) {


            //현재 위치에 해당하는 메뉴 강조 활성화
            $("#home").addClass("current_select");
            $("#aboutme").removeClass("current_select");
            $("#ability").removeClass("current_select");
            $("#portfolio").removeClass("current_select");


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


        //section2
        if (current_scroll_position >= sec2 - 650 && current_scroll_position <= sec2 + 250) {

            $("#home").removeClass("current_select");
            $("#aboutme").addClass("current_select");
            $("#ability").removeClass("current_select");
            $("#portfolio").removeClass("current_select");

            $(".am").animate({ transform: "translateY(-40vh)", opacity: 1 }, 1000);
        }
        else {
            $(".am").stop();
            $(".am").css({ transform: "translateY(0)", opacity: 0 });
        }



        //section3
        if (current_scroll_position >= sec3 - 650 && current_scroll_position <= sec3 + 250) {

            $("#ability").addClass("current_select");
            $("#aboutme").removeClass("current_select");
            $("#home").removeClass("current_select");
            $("#portfolio").removeClass("current_select");

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


        //section4

        if (current_scroll_position >= sec4 - 750) {

            $("#portfolio").addClass("current_select");
            $("#aboutme").removeClass("current_select");
            $("#ability").removeClass("current_select");
            $("#home").removeClass("current_select");

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

    });


    $("#aboutme").click(function () {
        $('html, body').animate({ scrollTop: sec2 - 60 }, "2s");


    });
    $("#ability").click(function () {
        $('html, body').animate({ scrollTop: sec3 - 60 }, "2s");


    });
    $("#portfolio").click(function () {

        $('html, body').animate({ scrollTop: sec4 - 80 }, "2s");

    });

});

