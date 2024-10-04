$(document).ready(function() {
    $(".portfolio-img").click(function() {
        var imgSrc = $(this).attr("src"); // Get the source of the clicked image
        $("#mainImage").attr("src", imgSrc); // Set the main image source

        // Animate the selected image
        $(".selected-image").fadeIn(400, function() {
            $("#mainImage").css({
                transform: 'scale(0.5)', // Start from half the size
                opacity: 0 // Start from zero opacity
            }).animate({
                transform: 'scale(1)', // Grow to original size
                opacity: 1 // Fade to full opacity
            }, 1000); // Duration for the animation
        });
    });
});
