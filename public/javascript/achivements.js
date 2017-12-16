$(window).load(function(event) {
    $('.post-module').hover(function() {
      console.log("Success!");
      $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  });
