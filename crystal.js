


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


var resetStartGame = function(){

    $(".crystals").empty();

    var images = [
        'http://static1.squarespace.com/static/5644b453e4b0552eb81185b6/5646246ce4b0a33eccdedd2d/56521e66e4b058e88fca5228/1449169817525/?format=1500w',
        'https://crystal-information.com/wp-content/uploads/bfi_thumb/blue-fluorite-1920x1080-mxz3kjutqxfj8ca1tpu3js4byl18xamnaz4fvdqq68.jpg',
        'https://ae01.alicdn.com/kf/HTB1BZtrLpXXXXazaXXXq6xXFXXXR/10pcs-Wedding-Decoration-11cm-Acrylic-Red-Crystal-Beads-Garland-Chandelier-Hanging-Party-Supply.jpg',
        'https://i.pinimg.com/originals/58/98/7c/58987c15ee4771f317cb4666a306a514.jpg'];

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
    crystal.css({
        "background-image":"url (' "+ images[i]+ " ')",
        "background-size":"cover"
    });

    crystal.html(random);

    $(".crystals").append(crystal);

}
$("#previews").html("Total Score: " + previews);
}


resetStartGame();




$(document).on("click",".crystal", function(){
 //console.log($(this));
 var num = parseInt ($(this).attr("dataRandom"));
 
 previews += num;

 $("#previews").html("Total Score: "+ previews);

if (previews > randomResult){
    console.log("You lost");
    lost++;
    $("#lost").html("You lost: "+ lost);
    previews=0;
    
resetStartGame();
}
else if (previews === randomResult){
    console.log("You win");
    win++;
    $("#win").html("You win: " + win);
    previews =0;
    
    resetStartGame();
}

 console.log(previews);
 

});


































