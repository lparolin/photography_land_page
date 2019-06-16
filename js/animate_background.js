const active_class = "active";
const next_class = "next";
const inactive_class = "inactive";
const class_array = [active_class, next_class, inactive_class];
const all_classes = class_array.join(" ");
const fadeout_duration = 2000;
const update_image_interval = 5000;

function initialize_images($all_images) {
    $all_images.each(function(index) {set_inactive( $(this) );});
    var active_image_index = 0;
    set_active($all_images.eq(active_image_index));
    var next_image_index = get_following_image_index($all_images, active_image_index);
    set_next($all_images.eq(next_image_index));
}

function remove_classes($image, classes=all_classes) {
    $image.removeClass(classes);
}

function set_active($image) {
    remove_classes($image, class_array.join(" "));
    $image.addClass(active_class);
}

function set_next($image) {
    remove_classes($image);
    $image.addClass(next_class);
}

function set_inactive($image) {
    remove_classes($image);
    $image.addClass(inactive_class);
    //$image.css("display", "block");
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

        // fadeout sets display to none at the end of the anymation
        // this is not what we want. Therefore at the end of the anymation
        // we remove the display setting, getting what the parent item has
        $active_image.fadeOut(fadeout_duration, function() {
            $active_image.css("display", "flex");
            active_image_index = update_classes($image_set, active_image_index);
        });

    }, update_image_interval);
}

$(document).ready(function () {
    animate_images();
});
