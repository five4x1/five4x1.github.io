// main JS for 54x1
$(document).ready(function() {
            if ($(".items>div>a").length > 0) {
        $("#flex-container>#funcBatch").show();
      } else {
        $("#flex-container>#funcBatch").hide();
      }
      if ($(".paginate-container>*").length > 0) {
        $('.paginate-container').show();
      } else {
        $('.paginate-container').hide();
      }

      $(".intro markdown-body").empty();
      $(".intro markdown-body").append('<div class"image-wrapper"></div>');

      $('.items').css({
        "box-shadow": "none"
      });
      $(window).on('mousemove', function(){
          $('body').mousemove(function(e) {
            var x = (e.pageX * -1 / 15);
            var y = (e.pageY * -1 / 15);
            $('section').css('background-position', x + 'px ' + y + 'px');
          });
        });

      });

    function funcBatch() {
      document.getElementById("funcBatch").href = "https://jfofbz.deta.dev/index?url=" + document.URL;
      return false;
    };
