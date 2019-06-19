$(document).ready(function(){

            // var scroll_pos = 0;
            // $(document).scroll(function() {
            //
              // var distanceFromTop = $(document).scrollTop();
              // console.log(distanceFromTop)
              //
              //   if(distanceFromTop < 138 )
              //   {
              //       let num = 1-$(document).scrollTop()/138
              //       console.log(num)
              //       // reduce div height to 250px
              //       $('.head').css('transform', 'scale(1, '+num+')');
              //   }
              //   else
              //   {
              //       // set minimum div height to 100px
              //       $('.head').css('transform', 'scale(1, 0.5)');
              //
              //   }
              //
                // scroll_pos = $(this).scrollTop();
                // if(scroll_pos > 90) {
                //     $(".head").css({'background-color':'transparent', 'opacity':'0.7', 'transform': 'scale(1, 0.5)','top':'-2em'});
                //
                // } else {
                //     $(".head").css({'background-color':'transparent', 'opacity':'1', 'transform': 'scale(1, 1)','top':'0.5em'});
                // }
            // });
            // $(".popup").click(function () {
            //     var $this = $(this);
            //     var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
            //     var $title = $("<h1>").text($this.data("title"));
            //     $("#video-view").html($title).append($iframe);
            //     $iframe.wrap("<div class='class-video'>");
            // });

            $('.hoke').hover(function () {
                $("#hoke").show();
                $("#sel").hide();
            },function () {
                $("#hoke").hide();
                $("#sel").show();

            });
            $('.lemontown').hover(function () {
                $("#lemontown").show();
                $("#sel").hide();
            },function () {
                $("#lemontown").hide();
                $("#sel").show();
            });
            $('.tetrotis').hover(function () {
                $("#tetrotis").show();
                $("#sel").hide();
            },function () {
                $("#tetrotis").hide();
                $("#sel").show();
            });
        });
