
$(document).ready(function() {
  console.log("The document is ready.")

  //Changes the colour of the counter from black to red if it exceeds 140 characters.
  $("form").find("textarea").keyup(function() {
    let tweetLength = $(this).val().length;
    $(this).next().find("output").text(140 - tweetLength);
    if(tweetLength > 140) {
      $(this).next().find("output").css("color","red")
    } else {
      $(this).next().find("output").css("color","#545149")
    }
  })
});