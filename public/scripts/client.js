/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(data){

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };

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
  }
  
  const $tweet = createTweetElement(tweetData);
  $('#tweets-container').append($tweet);
  console.log($tweet);
});

