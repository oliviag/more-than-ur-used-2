/* fancybox */
$(document).ready(function() {
		$(".fancybox").fancybox();



/* Start with first state
$.get( "states/1.html", function( data ) {
      $("#gameZone").html( data );
    }); */

/* Managing gamestates */

var gameState = 1;

/* change game content */

function changeContent(){

/* Get state file*/
    $.get( "states/"+gameState+".html", function( data ) {
        console.log( data );
      $("#gameZone").html( data );
     $(".fancybox").fancybox();
    });


};

/* adding or subtracting from gamestate */

function goNext() {
    gameState = gameState + 1;
    console.log(gameState);
    changeContent()
}

function goBack() {
    if (gameState === 1){
        console.log("Can't go below 1")
    }
    else{
    gameState = gameState - 1;
    console.log(gameState);
    changeContent();}
    
    
}

/* back and next buttons change the state */
$( "#backBtn" ).on( "click", goBack)
$( "#nextBtn" ).on( "click", goNext)

/* buttons in gameZone change State to their ID*/

$('#gameZone').on('click', 'button', function(){
        gameState = parseInt(event.target.id, 10);
        console.log(gameState);
        changeContent();
 });

}); //ready


/* button changes game content*/

// $("button").on( "click", changeContent)


