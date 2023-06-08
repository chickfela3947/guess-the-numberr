// generation of random value
var y = Math.floor(Math.random()  * 10 + 1);
console.log(y);
function submit(){
// count of attempts
var x = document.getElementById("guessField").value;
var playername = localStorage.getItem('player_name');
var guess = x;
// until hit
if(x==y)
{
    alert("CONGRATULATIONS!!!" +playername+ " YOU GUESS IT RIGHT IN "
             + guess + "GUESS ");
    guess= 1;         
}
// function for the number sent by the user
else if(x > y)

{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER")
}

}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}