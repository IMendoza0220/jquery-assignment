


//game with 4 chrystals 


//every chrystal needs to have a random number


// new number everytime we start over

//when click a chrystal should aadd the result

//until equals results

// if not equal start over

//if equal increment win





//game with 4 chrystals 


//every chrystal needs to have a random number


// new number everytime we start over

//when click a chrystal should aadd the result

//until equals results

// if not equal start over

//if equal increment win

var randomResult; 
var lost=0;
var win=0;
var previews = 0;


var startGame = function(){
    $(".crystal").empty();

    randomResult =Math.floor(Math.random()* 69 )+30;
//console.log(randomResult);

$("#result").html("Random Result: "+ randomResult);
for (var i=0; i<4; i++){

    //random
    var random = Math.floor(Math.random()*11)+1;
    //console.log(random);
    
    var crystal = $("<div>");
    crystal.attr({
        "class":"crystal",
        "dataRandom": random
    
    });

    $(".crystals").append(crystal);

}
}


startGame();



$(document).on("click", ".crystal" , function(){
 //console.log($(this));
 var num = parseInt ($(this).attr("dataRandom"));
 
 previews += num;

if (previews > randomResult){
    console.log("You lost");
    lost--;
    $("#lost").html(lost);
    previews=0;
startGame();
}
else if (previews === randomResult){
    console.log("You win");
    win++;
    $("#win").html(win);
    previews =0;
    startGame();
}

 console.log(previews);
 

});


































