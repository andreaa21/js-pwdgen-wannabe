const nomeUtente = prompt('Inserisci il tuo nome');
const cognomeUtente = prompt('Inserisci il tuo cognome');
const colorePreferito = prompt('inserisci il tuo colore preferito');
const anno = "22";

document.getElementById('password').innerHTML += `

${nomeUtente}${cognomeUtente}${colorePreferito}${anno}

`


