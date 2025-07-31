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
  const contendor = document.getElementById("card");

  const carta = cartaAleatoria();

  

  const paloArriba = document.createElement("div");
  paloArriba.textContent = carta.palo;
  paloArriba.className = "figure1"
  paloArriba.id = "randomSuit";
  

  const numero = document.createElement("div");
  numero.textContent = carta.valor
  numero.className = "number"
  numero.id = "numberRandom";

  const paloAbajo = document.createElement("div");
  paloAbajo.textContent = carta.palo;
  paloAbajo.className = "figure2"
  paloAbajo.id = "randomSuit2";
  

  //Añadir elementos a la carta
  contendor.appendChild(paloArriba);
  contendor.appendChild(numero);
  contendor.appendChild(paloAbajo);
  

 

  
};


