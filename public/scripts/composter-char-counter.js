
$(document).ready(function() {
  console.log("The document is ready.")
  $("form").find("textarea").keyup(function() {
    let tweetLength = $(this).val().length;
    console.log(tweetLength);
    $(this).next().find("output").text(140 - tweetLength);
    if(tweetLength > 140) {
      // $(".counter").css("color", "red");
      $(this).next().find("output").css("color","red")
    } else {
      $(this).next().find("output").css("color","#545149")
    }
  })
});