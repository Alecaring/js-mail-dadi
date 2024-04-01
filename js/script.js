                // ! PARTE LOGINA : || MAIL || BOTTONE || BOTTONE ERRORE ||
// --------------------------------------------------------------------------------------
const pushButtonElem = document.getElementById("pushButton");
console.log(pushButtonElem);
pushButtonElem.addEventListener("click", function() {
    const userEmailElem = document.getElementById("userEmail");
        console.log(userEmailElem);    
    const userEmail = userEmailElem.value.toLowerCase();
        console.log(userEmail);
    const autorizedPeople = ["alessio@Gmail.com", "alessandro@Gmail.com", "luana@Gmail.com", "antonio@Gmail.com", "beba@Gmail.com"];
    const autorizedPeopleLowerCase = autorizedPeople.map(autorizedPeople => autorizedPeople.toLowerCase());
    if (autorizedPeopleLowerCase.includes(userEmail)) {
        window.open("../dicesPage.html", "_self")
    } else {
        document.querySelector(".errorMessage").classList.remove("errorMessageNone") 
        console.log("Forse hai sbagliato a scrivere, questa e-mail non esiste.");
        const errorButtonExitElem = document.getElementById("errorButtonExit");
        console.log(errorButtonExitElem, typeof errorButtonExitElem);
        errorButtonExitElem.addEventListener("click", function() {
            document.querySelector(".errorMessage").classList.add("errorMessageNone");
        }) 
    }
})
// --------------------------------------------------------------------------------------
                // ! PARTE LOGICA NAVBAR || INDICARE LE MAIL CON ACCESSO







