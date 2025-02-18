let nomeUtente = prompt("Inserisci il tuo nome ----> ");



const cartaBottone = document.getElementById("carta");
const forbiceBottone = document.getElementById("forbice");
const sassoBottone = document.getElementById("sasso");
const risultatoSection = document.getElementById("risultato");
const rigiocaBottone = document.getElementById("rigioca");
const risultatoValore = document.getElementById("risultatoValore");
const risultatoPC = document.getElementById("giocata-pc");
const lancioCompuer = document.getElementById("testo-lancio-pc");
const spanLancioPc = document.getElementById("lancio-pc");
const puntoUtente = document.getElementById("utente-tabella");
const puntoPC = document.getElementById("pc-tabella");
const tabellaPunteggi = document.getElementById("tabella-punteggi");
const utenteID = document.getElementById("utente-id");
const pcID = document.getElementById("pc-id");
const nomeUtenteID = document.getElementById("nome-utente-id");

let contatorePC = 0;
let contatoreUtente = 0;

rigiocaBottone.addEventListener("click", function () {
    location.reload();
});

cartaBottone.addEventListener("click", function () {
    gioca("carta");
});

forbiceBottone.addEventListener("click", function () {
    gioca("forbice");
});

sassoBottone.addEventListener("click", function () {
    gioca("sasso");
});

function gioca(utente) {
    let generaLancio = Math.floor(Math.random() * 3) + 1;

    const carta = 1;
    const forbice = 2;
    const sasso = 3;

    lancioCompuer.classList.remove("hidden");
    lancioCompuer.style.color = "#525CEB";
    utenteID.classList.remove("hidden");
    pcID.classList.remove("hidden");
    nomeUtenteID.textContent = nomeUtente;

    if (generaLancio === carta) {
        risultatoPC.style.backgroundImage = "url('/assets/carta.jpg')";
        risultatoPC.style.height = "180px";
        risultatoPC.style.backgroundSize = "cover";
        risultatoPC.style.backgroundPosition = "center";
        risultatoPC.style.border = "4px solid #525CEB";
        if (utente === "carta") {
            risultatoValore.textContent = "PAREGGIO";
            risultatoSection.style.backgroundColor = "yellow";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "0";
        } else if (utente === "forbice") {
            contatoreUtente++;
            risultatoValore.textContent = "HAI VINTO";
            risultatoSection.style.backgroundColor = "green";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "1";
            paragrafoPC.textContent = "0";
        } else if (utente === "sasso") {
            contatorePC++;
            risultatoValore.textContent = "HAI PERSO";
            risultatoSection.style.backgroundColor = "red";
            
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "1";
        }
    } else if (generaLancio === forbice) {
        risultatoPC.style.backgroundImage = "url('/assets/forbice.jpg')";
        risultatoPC.style.height = "170px";
        risultatoPC.style.backgroundSize = "cover";
        risultatoPC.style.backgroundPosition = "center";
        risultatoPC.style.border = "4px solid #525CEB";
        if (utente === "carta") {
            contatorePC++;
            risultatoValore.textContent = "HAI PERSO";
            risultatoSection.style.backgroundColor = "red";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "1";
        } else if (utente === "forbice") {
            risultatoValore.textContent = "PAREGGIO";
            risultatoSection.style.backgroundColor = "yellow";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "0";
        } else if (utente === "sasso") {
            contatoreUtente++;
            risultatoValore.textContent = "HAI VINTO";
            risultatoSection.style.backgroundColor = "green";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "1";
            paragrafoPC.textContent = "0";
        }
    } else if (generaLancio === sasso) {
        risultatoPC.style.backgroundImage = "url('/assets/sasso.jpg')";
        risultatoPC.style.height = "170px";
        risultatoPC.style.backgroundSize = "cover";
        risultatoPC.style.backgroundPosition = "center";
        risultatoPC.style.border = "4px solid #525CEB";
        if (utente === "carta") {
            contatoreUtente++;
            risultatoValore.textContent = "HAI VINTO";
            risultatoSection.style.backgroundColor = "green";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "1";
            paragrafoPC.textContent = "0";
        } else if (utente === "forbice") {
            contatorePC++;
            risultatoValore.textContent = "HAI PERSO";
            risultatoSection.style.backgroundColor = "red";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "1";
        } else if (utente === "sasso") {
            risultatoValore.textContent = "PAREGGIO";
            risultatoSection.style.backgroundColor = "yellow";
            const paragrafoUtente = document.createElement("p");
            const paragrafoPC = document.createElement("p");
            puntoUtente.appendChild(paragrafoUtente);
            puntoPC.appendChild(paragrafoPC);
            paragrafoUtente.textContent = "0";
            paragrafoPC.textContent = "0";
        }
    }

    if (contatorePC === 3) {
        alert("HA VINTO IL COMPUTER");
        location.reload();
    }
    if (contatoreUtente === 3) {
        alert("HAI VINTO");
        location.reload();
    }
}

