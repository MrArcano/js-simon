// - creo una funzione che mi generi numeri casuali
// - stampo a schermo
// - avvio una fuzione setTimeout(5000)
// - faccio comparire 5 prompt in sequenza 
// - raccolgo i dati li confronto con i miei numeri
// - stampo il risultato

const numOutput = document.querySelector("h1");
console.log(numOutput);

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

const val =  arrayRndNumber(100,5).join(" - ")

numOutput.innerHTML = val;
