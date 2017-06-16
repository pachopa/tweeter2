$(function(){
  //hide textarea form
  $(".new-tweet").hide();

  /**
   * 
   * @params { tweet } obj (json format)
   * 
   * 
   */
  
  function createTweetElement(tweet) {
    //generate html5 element with css
    const $article = $('<article>').addClass('tweet');
    const $header = $('<header>');
    const $img = $('<img>').addClass('img');
    const $username = $('<p>').addClass('username');
    const $userfields = $('<p>').addClass('userfields');
    const $content = $('<p>').addClass('content');
    const $footer = $('<footer>');
    const $date = $('<p>');
    const $icon1 = $('<i>')
      .addClass('fa fa-heart fa-lag')
      .on('click', function(){
        $(this).toggleClass("fa fa-heart-o fa fa-heart fa-lag");
      });
    
    const $icon2 = $('<i>').addClass('fa fa-flag fa-lag');
    const $icon3 = $('<i>').addClass('fa fa-bell fa-lag');
    
    $img.attr('src', tweet.user.avatars.small);
    $username.text(tweet.user.name);
    $userfields.text(tweet.user.handle);
    $content.text(tweet.content.text);
    $date.text(moment(tweet.created_at).fromNow());

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

  function renderTweets(tweets) {
    //looping the tweetsDB
    $('#all-tweet').empty();
    for(var tweet of tweets) {
      createTweetElement(tweet);
    }
  }

  function loadTweets() {
    //get the data and call renderTweets Function
    $.ajax({
      method: 'GET',
      url: '/tweets/',
      dataType: 'json'
    }).done(function (data) {
      renderTweets(data);
    });
  }

  loadTweets();

  $('#createTweet').on('submit', function(event) {
    //check wheter text is empty or too long and pass the ajax post
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
        $('.counter').text('140');
      });
    }
  });

  $('button').on('click', function() {
    //slide up and down the from and select the textarea
    $(".new-tweet").slideToggle(400, function(){
      $("textarea").select();
    });
  });
});