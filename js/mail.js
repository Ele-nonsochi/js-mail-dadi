/**Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

const userDigit = prompt("Prego digitare la propria e-mail")

//Creo i miei elementi
const userEmail = ["constantine85.@gmail.com", "frodo.baggings@gmail.com", "dr.seussgmail.com"]
console.log(userEmail)

let emailWrong = false;
let emailCorrect = true;

//Controllo email - alert se non fa parte
for (let i = 0; i < userEmail.length; i++) {
    const emailDigit = userEmail[i];
    console.log(emailDigit)
    if (emailDigit === userEmail) {
        emailCorrect = true;
        alert("E-mail digitata è coretta.");
    } else if (emailDigit !== userEmail) {
        emailWrong = false;
        alert("E-mail errata , riprovare.");
    }
}

