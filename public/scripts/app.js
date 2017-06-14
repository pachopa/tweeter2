$(document).ready(function(){
  var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  //$tweetContainer.empty();
  for(var i in tweets) { 
    var $value = createTweetElement(tweets[i]);
  }
}


function createTweetElement(tweet) {
  var $article = $('<article>').addClass('tweet') ;
  var $header = $('<header>');
  var $img = $('<img>').addClass('img');
  var $username = $('<p>').addClass('username') ;
  var $userfields = $('<p>').addClass('userfields');
  var $content = $('<p>').addClass('content') ;
  var $footer = $('<footer>');
  var $date = $('<p>') ;
  var $icon1 = $('<i>').addClass('fa fa-heart fa-lag');
  var $icon2 = $('<i>').addClass('fa fa-flag fa-lag');
  var $icon3 = $('<i>').addClass('fa fa-bell fa-lag');

  $img.attr('src',tweet.user.avatars.small);

  $username.text(tweet.user.name);
  $userfields.text(tweet.user.handle);
  $content.text(tweet.content.text);
  $date.text(moment(tweet.created_at).fromNow())

  $header.append($img);
  $header.append($username);
  $header.append($userfields);
  $footer.append($date);
  $date.append($icon1);
  $date.append($icon2);
  $date.append($icon3);

  $article.append($header);
  $article.append($content);
  $article.append($footer);

  $('#all-tweet').append($article);
  // $('.testid').append($('<h2>this is h2 tag</h2>'));
  // $('.testid').append($('<h2>this is h2 tag</h2>'));
  //  $('.testid').append($('<h2>this is h2 tag</h2>'));
  // $('#all-tweet').append("<p>This is great</p>");
  //return $article;
 
}

renderTweets(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like

}); //document ready ends here

