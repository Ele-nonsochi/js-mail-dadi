/**Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

const userDigit = prompt("Prego digitare la propria e-mail")

//Creo i miei elementi
const userEmail = ["constantine85.@gmail.com", "frodo.baggings@gmail.com", "dr.seuss@gmail.com"]
console.log(userEmail)

let emailCorrect = false;
//let emailCorrect = true;

//Controllo l'email al'interno del ciclo
for (let i = 0; i < userEmail.length; i++) {
    const currentEmail = userEmail[i];
    console.log(currentEmail)
    if (userDigit === currentEmail) {
        emailCorrect = true;
        alert("E-mail digitata è coretta.");
    }
}

//Se non ne fa parte esce dal ciclo e esce l'alert
if (!emailCorrect) {
    alert("E-mail errata , riprovare.");
}

