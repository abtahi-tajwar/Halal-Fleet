var text;
$("document").ready(function(){
  $(".bot_chat_box_wrapper button").click(function(){
    initial_text = $(".bot_chat_box_wrapper input").val();
    text = initial_text.toLowerCase();


    if(text.indexOf("where") == 0)
    {
      if(text.includes("office"))
      {
        $(".bot_chat_answer_holder p").text("Halal fleet's office situated at Dhaka bashundhara, B block");
      }
      else if(text.includes("gaming"))
      {
        $(".bot_chat_answer_holder p").text("It's gaming portal still under development");
      }
      else if(text.includes("contact"))
      {
        $(".bot_chat_answer_holder p").text("You can find fleet members contact information an about page");
      }
    }

    if(text.indexOf("how") == 0)
    {
      if(text.includes("gaming"))
      {
        $(".bot_chat_answer_holder p").text("It's gaming portal still under development");
      }
      else if(text.includes("contact"))
      {
        $(".bot_chat_answer_holder p").text("You can find fleet members contact information an about page");
      }
    }


    if(text.indexOf("what") == 0)
    {
      if(text.includes("halal fleet") || text.includes("helal fleet") || text.includes("halel fleet"))
      {
        $(".bot_chat_answer_holder p").text("In a word, halal fleet is a group to encourage to for collaborate in gaming.");
      }
      if(text.includes("ariyan") || text.includes("aryan"))
      {
        if(text.includes("job") || text.includes("role"))
        {
          $(".bot_chat_answer_holder p").text("He maintains the hala fleet group and keep contacts with every member. He is the leader of that group.");
        }

      }
      else if(text.includes("othello") || text.includes("othelo"))
      {
        if(text.includes("job") || text.includes("role"))
        {
          $(".bot_chat_answer_holder p").text("He is leader of halal fleet so as ariyan and he maintains everything of halal fleet.");
        }
      }
      else if(text.includes("tajwar") || text.includes("tazwar"))
      {
        if(text.includes("job") || text.includes("role"))
        {
          $(".bot_chat_answer_holder p").text("He is admiral of halal fleet and watches over the website of halal fleet.");
        }
      }

    }


    if(text.indexOf("who") == 0)
    {
      if(text.includes("ariyan") || text.includes("aryan"))
      {
          $(".bot_chat_answer_holder p").text("He maintains the hala fleet group and keep contacts with every member. He is the leader of that group.");

      }
      else if(text.includes("othello") || text.includes("othelo"))
      {
          $(".bot_chat_answer_holder p").text("He is leader of halal fleet so as ariyan and he maintains everything of halal fleet.");
      }
      else if(text.includes("tajwar") || text.includes("tazwar"))
      {
          $(".bot_chat_answer_holder p").text("He is admiral of halal fleet and watches over the website of halal fleet.");
      }
    }
  });

});
