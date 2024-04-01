function immagineDaValore(numero) {
    switch (numero) {
        case 1:
            return "../asset/dado1.png";
        case 2:
            return "../asset/dado2.png";
        case 3:
            return "../asset/dado3.png";
        case 4:
            return "../asset/dado4.png";
        case 5:
            return "../asset/dado5.png";
        case 6:
            return "../asset/dado6.png";
        default:
            return "../asset/dado6.png"; // Nessun'immagine corrispondente
    }
}
document.getElementById("rollButton").addEventListener("click", function () {
    let max = 6;
    let min = 1;
    const randomNumComputer = Math.floor(Math.random() * (max - min + 1) + min);
    const randomNumUser = Math.floor(Math.random() * (max - min + 1) + min);
    // Aggiorna il DOM con le immagini corrispondenti
    document.getElementById("primoDado").innerHTML = '<img src="' + immagineDaValore(randomNumComputer) +
        '" alt="Dado Computer" style="width:150px; height:auto;">';
    document.getElementById("secondoDado").innerHTML = '<img src="' + immagineDaValore(randomNumUser) +
        '" alt="Dado Utente" style="width:150px; height:auto;">';
    // Logica per determinare il vincitore
    if (randomNumComputer > randomNumUser) {
        console.log("Hai perso");
        document.getElementById("esitoDadi").innerHTML = "Hai vinto :)"
    } else if (randomNumComputer === randomNumUser) {
        console.log("È pari");
        document.getElementById("esitoDadi").innerHTML = "Accidenti è pari"
    } else {
        console.log("Hai vinto");
        document.getElementById("esitoDadi").innerHTML = "Hai perso, ritenta ;)"
    }
});