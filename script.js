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
   $(".bottom_button").hover(function() {
        $("body").addClass('button-background');
   }, function() {
        $("body").removeClass('button-background');
   });
}); 