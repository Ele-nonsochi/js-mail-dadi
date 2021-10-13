/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//Determino le variabili
const player = Math.ceil(Math.random() * 6);
console.log(player);
const computer = Math.ceil(Math.random() * 6);
console.log(computer);

//Creo le condizioni e stabilisco perdita-vincita-parità
if (player > computer) {
    alert("Il giocatore ha vinto" + player + " contro " + computer + " del computer")
} else if (player < computer) {
    alert("Il giocatore ha perso " + player + " contro " + computer + " del computer")
} else {
    alert("Il giocatore ed il computer hanno pareggiato, facendo entrambi " + player)
}