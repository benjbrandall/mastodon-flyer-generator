var main = function() {
  $('#top-text').keyup(function(){
  	var topText = $(this).val();
    $('.top-caption').text(topText);
  });
  
   //$('#middle-text').keyup(function(){
  //	var middleText = $(this).val();
   // $('.middle-caption').text(middleText);
//  }); 
  
  $('#bottom-text').keyup(function(){
  	var bottomText = $(this).val();
    $('.bottom-caption').text(bottomText);
  });
  
  $('#image-url').keyup(function(){
  	var image = $(this).val();
    $('#meme').attr('src', image);
  });
  
}
 
$(document).ready(main);