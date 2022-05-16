// for (var i = 0; i < document.querySelectorAll(".role").length; i++) {
//     document.querySelectorAll(".role")[i].addEventListener("click", function() {
//         var currentplayer = this;
//         randomroll(currentplayer);
//     })
// }

// function randomroll(key) {
//     var random1 = Math.floor(Math.random() * 6 + 1);
//     var random2 = Math.floor(Math.random() * 6 + 1);
//     switch (key) {
//         case "Player 1":
//             var randomdice1 = "images/dice" + random1 + ".png";
//             document.querySelectorAll("img")[0].setAttribute("src", randomdice1);
//             break;
//         case "Player 2":
//             var randomdice2 = "images/dice" + random2 + ".png";
//             document.querySelectorAll("img")[1].setAttribute("src", randomdice2);
//             break;
//         default:
//             break;
//     }
//     whoiswinner(random1, random2);
// }

// function whoiswinner(random1, random2) {
//     if (random1 > random2)
//         document.querySelector("h1.winner").innerHTML = "Player1  won";
//     else if (random2 > random1)
//         document.querySelector("h1.winner").innerHTML = "Player2  won";
//     else
//         document.querySelector("h1.winner").innerHTML = "Match draw";
// }
// document.querySelector(".btn").addEventListener("click", function() {
//         document.querySelector(".btn").textContent = "Restart";
//         window.location.reload();
//     })
// document.querySelector(".btn").addEventListener("click", function() {
//     // document.querySelector(".btn").innerHTML = "Restart";
//     window.location.reload();
//     window.onload.call(document.querySelector(".btn").innerHTML = "Restart")

// });
// event.preventDefault();

var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);
var randomdice1 = "images/dice" + random1 + ".png";
var randomdice2 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdice1);
document.querySelectorAll("img")[1].setAttribute("src", randomdice2);
if (random1 > random2)
    document.querySelector("h1.winner").innerHTML = "Player1  won";
else if (random2 > random1)
    document.querySelector("h1.winner").innerHTML = "Player2  won";
else
    document.querySelector("h1.winner").innerHTML = "Match draw";