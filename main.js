
// Responsive Nav



//Smooth scrolling

$(document).ready(function() {
 
  $(".cf a").click(function() {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 800,
          easing: "swing"
      });
      return false;
  });

});