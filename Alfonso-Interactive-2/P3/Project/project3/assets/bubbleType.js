$(document).ready(function(){


    // Type using bubble type

    $('.letters').each(function() {

      var $letterWrapper = $(this);
      var letters = $letterWrapper.html().split('');
      var letterArray = [];

      for (i = 0; i < letters.length; i++) {
        console.log(letters[i]);

        var character = letters[i];
        var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
        var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
        
        letterArray.push(characterHTML);
      };

      $letterWrapper.html(letterArray);

    });



    // Random bubble size

    var colors = [
        "rgba(186, 92, 186, 0.7)",
        "rgba(131,224,224,0.7)",
        "rgba(13, 199, 165, 0.7)",
        "rgba(86, 60, 232, 0.7)",
        "rgba(242, 206, 233, 0.7)",
        "rgba(117, 238, 137, 0.7)",
        "rgba(213, 236, 158, 0.7)"
    ];

    $('.sphere').each(function() {

        var min = 35;
        var max = 65;

        var random = Math.floor(Math.random() * (max - min + 1)) + min;

        var randomColor = colors[Math.floor(Math.random()*colors.length)];
        console.log("random color is " + randomColor);
        
        $(this).css("width", random +"px");
        $(this).css("height", random +"px");
        $(this).css("background", randomColor);
    });


    // jQuery toggle colors. click on any of the circles

    var state = 'one';

    // Change to "style two"
    function changeToTwo(){
        $('.sphere, .bigCircle, .lilCircle, .backCircle').addClass('style-two');
        state = 'two';
    }

    // Change back to one (default)
    function changeToOne(){
        $('.sphere, .bigCircle, .lilCircle, .backCircle').removeClass('style-two');
        state = 'one';
    }

    // Click the button
    $('.lilCircle').click(function(){

        if(state == 'one'){
          changeToTwo();
        }
        
        else {
          changeToOne();
        }    
    
    });

});


// pretty scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// bigCirlce color
var colors = [
    "linear-gradient(#353358, #77B7E5, #FFF)",
    "linear-gradient(red, green, blue)",
    "linear-gradient(yellow, purple)",
    "rgba(242, 206, 233, 0.7)",
    "rgba(131,224,224,0.5)",
    "black",
    "white"
];

var counter = 0;

$('button').click(function(){
    if (counter == colors.length) { counter = 0; }
    var currentColor = colors[counter];
    $('.bigCircle').css("background", currentColor);
    counter++;
});

// background color
var colors = [
    "linear-gradient(#353358, #77B7E5, #FFF)",
    "linear-gradient(red, green, blue)",
    "linear-gradient(yellow, purple)",
    "rgba(242, 206, 233, 0.7)",
    "rgba(131,224,224,0.5)",
    "black",
    "white"
];

var counter = 0;

$('.newButton').click(function(){
    if (counter == colors.length) { counter = 0; }
    var currentColor = colors[counter];
    $('body').css("background", currentColor);
    counter++;
});