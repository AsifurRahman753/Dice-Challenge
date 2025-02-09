var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./dice" + randomNumber + ".jpeg";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);








var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "./dice" + randomNumber2 + ".jpeg";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏴Player 1 Wins!";
}
else if(randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏴Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "🤜🤛Drawn!!";
}