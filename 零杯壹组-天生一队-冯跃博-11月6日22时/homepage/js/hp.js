$(document).ready(function () {

    $(window).resize(function () {

        windowSize = $(window).width();

        if (windowSize >= 768) {
            mouseMove();
        } else {
            $(".js-Side-left").css({
                "left": 0
            });

            // Image translation
            $(".js-Side-left-image").css({
                "margin-left": 0
            });

            $(".js-Side-right-image").css({
                "right": 0
            });
        }

    });

    var windowSize = $(window).width();

    // Getting mouse move and animating div and images
    function mouseMove() {

        $(".js-Home-desktop-wrapper").mousemove(function (event) {
            if (windowSize >= 768) {

                var mouseX = event.pageX,
                    result = mouseX * 100 / windowSize,
                    move = -(windowSize / 2) - mouseX;

                $(".js-Side-left").css({
                    "left": move
                });

                // Image translation
                $(".js-Side-left-image").css({
                    "margin-left": -windowSize - move + (mouseX - (windowSize / 2)) / 40,
                });

                $(".js-Side-right-image").css({
                    "right": -(mouseX - (windowSize / 2)) / 40,
                });
            }
        });
    }

    mouseMove();

});

$(".title1").hover(
    function(){
        $(this).attr('src','../images/title1_hover.png');
    }
)
$(".title1").mousedown(
    function(){
        $(this).attr('src','../images/title1_click.png');
    }
)
$(".title1").mouseleave(
    function(){
        $(this).attr('src','../images/title1.png');
    }
)
$(".title2").hover(
    function(){
        $(this).attr('src','../images/title2_hover.png');
    }
)
$(".title2").mousedown(
    function(){
        $(this).attr('src','../images/title2_click.png');
    }
)
$(".title2").mouseleave(
    function(){
        $(this).attr('src','../images/title2.png');
    }
)