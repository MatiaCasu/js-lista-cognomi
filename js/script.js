// Lista a cui aggiungere input utente
var cognLista = ["brambilla", "fumagalli", "bianchi", "rossi", "duzioni", "balsano", "verdi"];

// Richiesta Cognome Utente fin che l'input non sarà isNan
do{
  var cognome = prompt("Inserisci cognome");
}
while (isNaN(cognome) === false);
// Richiesta Cognome Utente fin che l'input non sarà isNan

// Aggiunta input in Lista e modifica stringa in minuscolo
cognLista.push(cognome = cognome.toLowerCase());

// Nuova variabile lista in ordine alfabetico tra stringhe in minuscolo
var listaOrdinata = cognLista.sort();
// /Nuova variabile lista in ordine alfabetico tra stringhe in minuscolo

// Stampa Posizione Utente
for(var i = 0; i < cognLista.length; i++){
  if(cognome === listaOrdinata[i]){
    listaOrdinata[i] = listaOrdinata[i] + " N': " + (i + 1);
  }
  console.log(listaOrdinata[i]);
}
// /Stampa Posizione Utente
