// Lista a cui aggiungere input utente
var cognLista = ["brambilla", "fumagalli", "bianchi", "rossi", "duzioni", "balsano", "verdi"];

// Cognome Utente
var cognome = prompt("Inserisci cognome");
if(isNaN(cognome)){
  cognome = cognome.toLowerCase();
  cognLista.push(cognome);
}
else{
  alert("Hai inserito un numero!")
}
// /Cognome Utente

// Lista in ordine alfabetico
var listaOrdinata = cognLista.sort();
// /Lista in ordine alfabetico

// Stampa Posizione Utente
for(var i = 0; i < cognLista.length; i++){
  if(cognome === listaOrdinata[i]){
    listaOrdinata[i] = cognome + " N': " + (i + 1);
  }
  console.log(listaOrdinata[i]);
}
// /Stampa Posizione Utente
