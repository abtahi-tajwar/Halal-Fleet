var text;
$("document").ready(function(){
  $(".bot_chat_box_wrapper button").click(function(){
    text = $(".bot_chat_box_wrapper input").val();

    $(".bot_chat_answer_holder p").text(text);
  });

});
