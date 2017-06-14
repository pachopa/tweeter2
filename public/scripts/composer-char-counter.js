// check remain length && change color
$(document).ready(function(){
  $('textarea').keyup(function(){
    var inputLength = $(this).val().length;
    var remain = 140 - inputLength;
    $('.counter').html(remain);
    if(remain >= 0){
      $('.counter').css('color','black');
    } else {
      $('.counter').css('color','red');
    }
  });
});