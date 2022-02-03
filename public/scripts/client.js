/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){

  //Creates a new tweet element using data from the object. 

  const createTweetElement = function (data) {
    const $tweet = `
    <article class = "tweet">
      <header>
      <span>
        <img src="${data.user.avatars}">
        <span class="name">${data.user.name}</span>
      </span>
      <span class="username">${data.user.handle}</span>
    </header>
    <section>
      <span class="text"><b>${data.content.text}</b></span>
    </section>
    </body>
    <footer>
      <span class="timestamp">${timeago.format(data.created_at)}</span>
      <span class="icons">
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
    for (let tweet of tweets) {
      let $newTweet = createTweetElement(tweet);
      $('#tweets-container').append($newTweet);
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
    console.log("Form submitted.")
    event.preventDefault();

    let length = $("form").find("textarea").val().length;
    if (length > 140) {
      alert("Characters exceed max amount!")
    } else if (length <= 0) {
      alert("Character box cannot be empty.")
    } else {
      const param = $(this).serialize();
      $.post('/tweets', param).then(() => {
      })
    }
  });

  loadTweets();
});

