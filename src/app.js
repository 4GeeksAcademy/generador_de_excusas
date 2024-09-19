/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");

  //arrays con las excusas que queremos mostrar
  let who = ["El gato", "Jonimiel", "Diva mi perra", "Monini"];
  let action = ["se comió el vómito", "se cayó", "se murió", "se casó"];
  let place = ["en el baño", "en la casa", "en el bar", "en el coche"];

  //debemos generar números ramdon para esas excusas
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomPlace = Math.floor(Math.random() * place.length);

  //debemos unir estos dos conceptos para que se muestren en la ventana
  document.querySelector("#excuse").innerHTML =
    who[randomWho] + " " + action[randomAction] + " " + place[randomPlace];
};
