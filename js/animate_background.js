const active_class = "active";
const next_class = "next";
const inactive_class = "inactive";
const fadeout_duration = 100;
const update_image_interval = 5000;

function initialize_images($all_images) {
    $all_images.each(function(index) {set_inactive( $(this) );});
    var active_image_index = 0;
    set_active($all_images.eq(active_image_index));
    var next_image_index = get_following_image_index($all_images, active_image_index);
    set_next($all_images.eq(next_image_index));
}

function remove_animation_classes($image) {
    $image.removeClass(active_class);
    $image.removeClass(next_class);
    $image.removeClass(inactive_class);
}

function set_active($image) {
    remove_animation_classes($image);
    $image.addClass(active_class);
}

function set_next($image) {
    remove_animation_classes($image);
    $image.addClass(next_class);
}

function set_inactive($image) {
    remove_animation_classes($image);
    $image.addClass(inactive_class);
    $image.css("display", "block");
}

function get_following_image_index($image_set, image_index) {
    var n_images = $image_set.length;
    var following_image_index = (image_index + 1) % n_images;
    return following_image_index;
}

function update_classes ($image_set, active_image_index) {
    set_inactive($active_image);

    var next_image_index = get_following_image_index($image_set, active_image_index);
    set_active($image_set.eq(next_image_index));
    var current_active_image = next_image_index;

    var upcoming_next_image = get_following_image_index($image_set, next_image_index);
    set_next($image_set.eq(upcoming_next_image));

    return current_active_image;
}

function animate_images() {
    var $image_set = $("div#splash_background:first").children();
    initialize_images($image_set);
    var active_image_index = 0;
    window.setInterval(function() {
        $active_image = $image_set.eq(active_image_index);
        $active_image.fadeOut(fadeout_duration, function() {
            active_image_index = update_classes($image_set, active_image_index);
        });
    }, update_image_interval);
}

$(document).ready(function () {
    animate_images();
});
