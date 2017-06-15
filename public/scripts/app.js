$(document).ready(function(){
  function renderTweets(tweets) {
   $('#all-tweet').empty();
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

    $('#all-tweet').prepend($article);
  }

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets/',
      dataType: 'json',
      }).done(function (data) {
        renderTweets(data);
      }
    );
  }

  $('#createTweet').on('submit', function (event) {
    event.preventDefault();
    var text = $('textarea').val();
    if (text.length === 0) {
      alert('can not be empty!');
    } else if (text.length > 140) {
      alert('Character shoud be less than 140 leters');
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets/',
        data: $(this).serialize()
      }).done(function () {
        loadTweets(); 
        $('textarea').val('');
      });
    }
  });

  
}); //document ready ends here

