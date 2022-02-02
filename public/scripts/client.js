/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function () {
  const $tweet = $(`<article class = "tweet">
  <header>
    <span>
      <img src="/images/profile-hex.png">
      <span>Newton</span>
    </span>
    <span class="username">@YourName</span>
  </header>
  <section>
    <span class="text"><b>If I have seen further it is by standing on the shoulder of giants.</b></span>
  </section>
  </body>
  <footer>
    <span class="timestamp">10 days ago</span>
    <span class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
  </footer>
</article>`);
}

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
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.