var background_color_str = $(".navbar-main").css('background-color');
$("div#navbar-menubar.show").css('background-color', background_color_str);  // set a background color to the navabr when showed

var background_color=background_color_str.slice(4).split(',');
var rgb_background_str =  'rgba(' + background_color[0] + ',' + parseInt(background_color[1]) + ',' + parseInt(background_color[2]);

function setNavBarBackGroundAndShadow(is_background_opaque=false) {
  var current_scroll = $(window).scrollTop();
  var threshold_scroll = 150.0;
  var alpha_value = Math.min(current_scroll / threshold_scroll, 1.0);
  var is_navbar_visible = $( "#navbar-menubar" ).hasClass( "show" );
  if (is_background_opaque || is_navbar_visible) {
     alpha_value = 1; // neglet scrolling
  }
  var bg_color_str = rgb_background_str + ',' + alpha_value + ')' ;
  $('.navbar-main').css("background-color", bg_color_str);
  var current_scroll = $(window).scrollTop();
  if (current_scroll >= threshold_scroll) {
    $(".navbar-main").addClass("shadow");  // static shadow
    $(".navbar-main").removeClass("classWithShadow"); // on hoover add shadow
  }
  if (current_scroll < (threshold_scroll-10.0)) {
    $(".navbar-main").removeClass("shadow");
   $(".navbar-main").addClass("classWithShadow");
  }
}
