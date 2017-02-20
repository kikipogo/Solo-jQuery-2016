// In this challenge you will be creating an application that will create colored `<div>` tag each time the corresponding color is clicked. As each color (button) is clicked, it should increment the corresponding label. HTML and CSS are provided, the focus here is jQuery.



var clicks = 0;


$(document).ready(function(){
  addColors();


  function addColors(){
    $('button').on('click', '.color-button', function(){
      var colorData = $(this).data();
      var newColor = $('<div>');
      if ( colorData == 'red'){
        newColor.addClass('red');
      }else if  ( colorData == 'yellow'){
        newColor.addClass('yellow');;
      }else if  ( colorData == 'green'){
        newColor.addClass('green');
      }else {
        newColor.addClass('blue');
      }
      $('.container').append(newColor);
    });
  });

});
