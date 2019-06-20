$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("p").on("click", function() {
        $("p").addClass('red-p');
   });
   $("h2").hover(function() {
        $("h2").addClass('background-h2');
   });
   $("h2").hover(function() {
        $("h2:hover").addClass('font-size-h2');
   });
   $(".bottom_button").mouseenter(function() {
        $(".bottom_button").removeClass("makeRed").addClass("makeBorder");
   });
   $(".bottom_button").mouseleave(function() {
        $(".bottom_button").addClass("makeRed").removeClass("makeBorder");
   });
   $(".card_image").click(function() {
        $(".card_image").next().next().slideDown("slow");
   });
   $("p").click(function() {
       $("p").children("a").addClass("makeYellow");
   });
   $(".card").click(function() {
       $(this).toggleClass("makePink");
   });
   $("#select_btn").on("click", function() {
       $(".card:not(.makePink)").hide("fast");
   });
   $("#all_btn").on("click", function() {
       $(".card").show("fast");
   });
}); 