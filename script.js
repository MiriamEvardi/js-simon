// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?





// data e ora di lunedì

const mondayDate = new Date("February 12, 2024 9:30:00").getTime();
document.getElementById("timer").innerHTML = mondayDate;

// data di oggi
const date = new Date();
console.log(date)


//ore mancanti
const count = mondayDate - date;
console.log(count)

const days = Math.floor(count / (1000 * 60 * 60 * 24));
console.log(days)
const hours = Math.floor(count % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
console.log(hours)
const minutes = Math.floor(count % (1000 * 60 * 60) / (1000 * 60));
console.log(minutes)
const seconds = Math.floor(count % (1000 * 60) / 1000);
console.log(seconds)








