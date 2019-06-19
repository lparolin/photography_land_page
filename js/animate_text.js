function create_tokens(in_string, token="") {
    var out_data = in_string.split(token);
    for (index = 0; index < out_data.length - 1; index++) {
        out_data[index] = out_data[index] + token;
    }
    return out_data;
}

function make_text_appear(initial_delay_ms=1000, animation_duration_ms=80) {
  var text_to_animate = $('.animate_appear');
  var new_content = create_tokens(text_to_animate.text(), "");
  text_to_animate.text("");
  $.each(new_content, function (index, value) {
      var new_item = $("<span>" + value  + "</span>");
      new_item.css("white-space", "pre");
      new_item.css("opacity", 0);
      text_to_animate.append(new_item);
  })
  text_to_animate.css("opacity", "");
  text_to_animate.children().each(function(index) {
      $(this).delay(initial_delay_ms + animation_duration_ms * index).animate({opacity: 1}, animation_duration_ms)
  });
}

function make_text_appear_from_below(initial_delay_ms=1000, animation_duration_ms=2000) {
    const initial_margin = "10vh 0 0 0"; // top, right, bottom, left
    const final_margin = "20vh 0 0 0";
    var $text_to_animate = $('h1.animate_appear');
    $text_to_animate.css("margin", initial_margin);
    $text_to_animate.delay(initial_delay_ms).animate({
        margin: final_margin,
        opacity: 1.0,
        }, animation_duration_ms );
}

$(document).ready(function () {
    make_text_appear_from_below();
});
