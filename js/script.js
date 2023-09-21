// - creo una funzione che mi generi numeri casuali
// - stampo a schermo
// - avvio una fuzione setTimeout(5000)
// - faccio comparire 5 prompt in sequenza 
// - raccolgo i dati li confronto con i miei numeri
// - stampo il risultato

const numOutput = document.querySelector("#output-num-rnd");
const btnStart = document.querySelector("#btn-start");
const card = document.querySelector(".card");
const timer = document.querySelector(".timer");

// DATA
let arrayRnd = [];
let arrayUser = [];
const min = 1;
const max = 100;
const dimArray = 5;
let defaultSec = 5;
let defaultMs = 0;
let myIntervall;
let s = 0;
let ms = 0;

// Al click del button START
btnStart.addEventListener("click",start);

// **********************************
// ------------ FUNCTION ------------
// **********************************

// -------------------------------------------------------------------------
// ********************************* START *********************************
function start(){
  // rimuovo la possibilità di cliccare di nuovo il button
  this.removeEventListener("click",start);

  // Genero un array di [dimArray] numeri casuali senza ripetizione
  arrayRnd =  arrayRndNumber(min,max,dimArray);
  console.log(arrayRnd);

  // rendo visibile il mio DIV che conterrà i numeri
  card.classList.remove("d-none");

  // Stampo a schermo dentro il mio DIV
  numOutput.innerHTML = arrayRnd.join(" - ");

  // Setting var timer
  s = defaultSec;
  ms = defaultMs;
  myIntervall = setInterval(timerMs,10);
}
// -------------------------------------------------------------------------
// ***************************** ARRAY RND NUM *****************************
function arrayRndNumber(min,max,numberElement){
  const arrayElement = [];
  do{
    numRnd = Math.floor(Math.random()* (max - min + 1) + min);
    if (!arrayElement.includes(numRnd)){
      arrayElement.push(numRnd);
    };
  }while(arrayElement.length < numberElement)
  return arrayElement;
}
// -------------------------------------------------------------------------
// ********************************* TIMER ********************************* 
function timerMs(){

  // stampa aggiornando il timer
  timer.innerHTML = `00:${s.toString().padStart(2,0)}:${ms.toString().padStart(3,0)}`;
  if (s > 0 || ms > 0){
    if (ms < 10){
      s--;
      ms=990;
    }else{
      ms -= 10;
    }
  }else{
    clearInterval(myIntervall);
    hideNum();
  }
}
// -------------------------------------------------------------------------
// ******************************* HIDE  NUM *******************************
function hideNum(){
  numOutput.innerHTML = "";
  card.classList.add("d-none");
  setTimeout(viewPromt,100);
}
// -------------------------------------------------------------------------
// ****************************** VIEW  PROMT ******************************
function viewPromt(){
  arrayUser = [];
  for (let i=1; i<=dimArray; i++){
    const num = parseInt(prompt(`Inserisci il n${i}:`));
    if (arrayRnd.includes(num)){
      if (!arrayUser.includes(num)){
        arrayUser.push(num);
      }
    }
  }
  stampResult();
}
// -------------------------------------------------------------------------
// ***************************** STAMP  RESULT *****************************
function stampResult(){
  btnStart.addEventListener("click",start);
  card.classList.remove("d-none");
  numOutput.innerHTML = `
  <p>Hai indovinato ${arrayUser.length} numeri</p>
  <p>${arrayUser.join(" - ")}</p>
  `;
}