import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   function cartaAleatoria() {
    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const palos = ["♠️", "♥️", "♦️", "♣️"];

    const valor = valores[Math.floor(Math.random() * valores.length)];
    const palo = palos[Math.floor(Math.random() * palos.length)];

    return { valor, palo };
  }
  const carta = cartaAleatoria();

  document.getElementById("numberRandom").innerHTML = carta.valor;
  document.getElementById("randomSuit").innerHTML = carta.palo;
  document.getElementById("randomSuit2").innerHTML = carta.palo;
  
};


