// Type Using Bubble Type
var letters = $('.letters').html().split('');
var letterArray = [];

for (i = 0; i < letters.length; i++) {
    console.log(letters[i]);
 
	var character = letters[i];
    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
    
    letterArray.push(characterHTML);
};

$('.letters').html(letterArray);



// Random Bubble Size
$('.sphere').each(function() {
    var min = 40;
	var max = 60;

	var random = Math.floor(Math.random() * (max - min + 1)) + min;
    
    $(this).css("width", random +"px");
    $(this).css("height", random +"px");
});
