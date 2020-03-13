//$("p").click(() => {});
$().ready(() => {

    console.log("jQuery is ready.");

    $("div").html("<h1>Welcome to jQuery</h1>").css("color", "chartreuse").css("font-family", "Fira Code").addClass("hello");
    $("h1").click(() => $(this).css("font-family", "Impact"));
    $("button").click(() => {console.warn("Button was clicked.")});

});