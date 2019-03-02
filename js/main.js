$("document").ready(function() {
  $(".fleet_admiral_wrapper").mouseover(function(){
    $(this).css({
      "width": "60%",
      "opacity": "0.9",
      "transition": "all 0.5s ease"
    });
  });
  $(".fleet_admiral_wrapper").mouseout(function() {
    $(this).css({
      "width": "40%",
      "opacity": "0.9",
      "transition": "all 0.5s ease"
    });
  });

  $(".fleet_admiral_wrapper_othello").mouseover(function(){
    $(this).css({
      "width": "60%",
      "opacity": "0.9",
      "transition": "all 0.5s ease"
    });
  });
  $(".fleet_admiral_wrapper_othello").mouseout(function() {
    $(this).css({
      "width": "40%",
      "opacity": "0.9",
      "transition": "all 0.5s ease"
    });
  });


})
