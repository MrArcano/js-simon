// - creo una funzione che mi generi numeri casuali
// - stampo a schermo
// - avvio una fuzione setTimeout(5000)
// - faccio comparire 5 prompt in sequenza 
// - raccolgo i dati li confronto con i miei numeri
// - stampo il risultato

const numOutput = document.querySelector("h1");
// DATA
let arrayRnd = [];
let arrayUser = [];
const dimArray = 5;

start();

// **********************************
// ------------ FUNCTION ------------
// **********************************

// START
function start(){
  arrayRnd =  arrayRndNumber(100,dimArray);
  numOutput.innerHTML = arrayRnd.join(" - ");
  myIntervall = setTimeout(viewPromt,5000);
}

// ARRAY RND NUM
function arrayRndNumber(max,numberElement){
  const arrayElement = [];
  do{
    numRnd = Math.ceil(Math.random()*max);
    if (!arrayElement.includes(numRnd)){
      arrayElement.push(numRnd);
    };
  }while(arrayElement.length < numberElement)
  return arrayElement;
}


// VIEW PROMT
function viewPromt(){
  numOutput.innerHTML = "";
  for (let i=1; i<=dimArray; i++){
    const num = parseInt(prompt("Inserisci il primo numero:"));
    if (arrayRnd.includes(num)){
      arrayUser.push(num);
    }
  }
  result();
}


function result(){
  numOutput.innerHTML = arrayUser.join(" - ");
}
