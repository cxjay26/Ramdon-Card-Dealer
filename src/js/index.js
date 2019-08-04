/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("button").addEventListener("click", () => {
    var x = document.querySelector("#topsuit");
    var y = document.querySelector("#bottomsuit");
    var suit = cardSuit();
    x.innerHTML = suit;
    y.innerHTML = suit;

    if (suit === "\u2665") {
      document.body.style.color = "red";
    } else if (suit === "\u2666") {
      document.body.style.color = "red";
    } else {
      document.body.style.color = "black";
    }
    document.querySelector("#cardvalue").innerHTML = cardValue();
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let cardSuit = () => {
    let suits = ["\u2665", "\u2666", "\u2663", "\u2660"];
    return suits[getRndInteger(0, 4)];
  };

  let cardValue = () => {
    let value = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    return value[getRndInteger(0, 13)];
  };
};
