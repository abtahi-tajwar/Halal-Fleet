var bot_chat_wrapper_height = 400;
var bot_chat_image_holder_height = 200;

var bot_chat_input_height;
var bot_chat_submit_button;


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

  bot_chat_wrapper_height = $(".bot_chat_wrapper").height();
  bot_chat_image_holder_height = $(".bot_chat_image_holder").width();

  $(".bot_chat_image_holder").css({
    'margin-top': ((bot_chat_wrapper_height - bot_chat_image_holder_height)/2)+"px",
    'margin-bottom': ((bot_chat_wrapper_height - bot_chat_image_holder_height)/2)+"px"
  });

  bot_chat_input_height = $(".bot_chat_box_wrapper input").height();
  $(".bot_chat_box_wrapper input").css({
    'margin-top': ((bot_chat_wrapper_height - bot_chat_input_height)/2)+"px",
    'margin-bottom': ((bot_chat_wrapper_height - bot_chat_input_height)/2)+"px"
  });

  bot_chat_submit_button = $(".bot_chat_box_wrapper button").height();
  $(".bot_chat_box_wrapper button").css({
    'margin-top': (((bot_chat_wrapper_height - bot_chat_submit_button)/2)+10)+"px",
    'margin-bottom': (((bot_chat_wrapper_height - bot_chat_submit_button)/2)-10)+"px"
  })
});
