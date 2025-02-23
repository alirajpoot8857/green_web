$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('body').toggleClass('body-active');
  });
  $('#sidebarCollapse_close').on('click', function () {
    $('#sidebar').removeClass('active');
    $('body').removeClass('body-active');
  });
});




$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".header_wrap").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".header_wrap").removeClass("active");
  }
});


// open_option
$(document).ready(function() {
  $(".open_option").click(function() {
    $(".drop_down_box").toggle();
  });

  
});