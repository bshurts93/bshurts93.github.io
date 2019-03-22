// ANIMATIONS

// Opacity on load
$(".intro-1").css("opacity", "0");
$(".intro-2").css("opacity", "0");


// Waypoints
$("#section-portfolio-intro").waypoint(function () {
    $(".intro-1").addClass("animated fadeIn");
    $(".intro-2").addClass("animated fadeIn");

}, { offset: "70%" });

// $(".foodbanx").waypoint(function () {
//     $(".foodbanx").addClass("animated fadeIn");
// }, { offset: "50%" });

function animateProjects(projectClass) {
    $(projectClass).css("opacity", "0");

    $(projectClass).waypoint(function () {
        $(projectClass).addClass("animated fadeIn");
    }, { offset: "60%" });
}

animateProjects(".foodbanx");
animateProjects(".train");
animateProjects(".trivia")


