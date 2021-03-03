/*
Chiedere cognome utente
inserirlo in array con altri cognomi.
Stampare la lista ordinata alfabeticamente
scrivere posizione "umana" utente.
*/

// Lista a cui aggiungere input utente
var cognLista = ["Brambilla", "Fumagalli", "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// Cognome Utente
var cognome = (prompt("Inserisci cognome"));
cognLista.push(cognome);
// /Cognome Utente

// Lista in ordine alfabetico
cognLista.sort();
console.log(cognLista);
// /Lista in ordine alfabetico
