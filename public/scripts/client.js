/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  //To prevent XSS, escape function.

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Creates a new tweet element using data from the object. 

  const createTweetElement = function (data) {
    const $tweet = `
    <article class = "tweet">
      <header>
        <span>
          <img src="${escape(data.user.avatars)}">
          <span class="name">${escape(data.user.name)}</span>
        </span>
        <span class="username">${escape(data.user.handle)}</span>
      </header>
    <section>
      <span class="text"><b>${escape(data.content.text)}</b></span>
    </section>
    <footer>
      <span class="timestamp">${escape(timeago.format(data.created_at))}</span>
      <span class="icon">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`;
  return $tweet;
  };
  
  //Creates a new tweet from the data and appends it to the tweets container.
  const renderTweets = function(tweets) {
    //empty the tweets container each time renderTweets is used.
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      let $newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend($newTweet);
    }
  }

  //Loads and renders the tweet using the get method.
  const loadTweets = function () {
    $.ajax('/tweets', {method: 'GET'})
    .then(function (tweets) {
      console.log('Success: ', tweets);
      renderTweets(tweets)
    })
  }

//Handles the ajax post request on submit and the form validation.
  $("#submit").submit(function(event) {
    
    let tweetText = $("form").find("textarea").val();
    console.log("Form submitted.")

    event.preventDefault();

    //Shows warning text if any of the form validation fails. Checks to see if the number of characters fall within the required amount.
    $('.warning').slideDown(400).text('').hide();
    if (tweetText.length > 140) {
      return $('.warning').text("Characters exceed max amount!").slideDown();
    } 

    //Prevents white space from being tweeted.
    if (tweetText === null || tweetText.trim() === '' || tweetText.length <= 0) {
      return $('.warning').text("Character box cannot be empty.").slideDown();
    } 
      $.ajax({
        url: "/tweets",
        data: $(this).serialize(), 
        method: 'post',
        success: function() {
          $("form").find("textarea").val('');
          loadTweets();
      }
    })
});

  loadTweets();
});

