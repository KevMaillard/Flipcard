let cardnumber = document.getElementById('cardnumber');
let cardnamep = document.getElementById('cardnamep');
let carddatep = document.getElementById('carddatep');
let cvc = document.getElementById('cvc');
let cardnumberinfo = document.getElementById('cardnumberinfo');
let titulaireinfo = document.getElementById('titulaireinfo');
let expiration = document.getElementById('expiration');
let crypto = document.getElementById('crypto');
let card = document.getElementById('card');

                                                    // Les infos sont reportées sur la CB
cardnumberinfo.addEventListener('input', () => {
    cardnumber.innerHTML = cardnumberinfo.value;
    // If 4/8/12 numbers, then display space
    if(cardnumberinfo.value.length===4 || cardnumberinfo.value.length===9 || cardnumberinfo.value.length===14){
        cardnumberinfo.value+=" ";
    }

    // if (/^4\d{12}(?:\d{3})?$/.test(cardnumberinfo)){
    //     alert("numero valide");
    // } 
    // else {
    //     alert("numero invalide");
    // }

});


// Function validation(){
//     var regexcard = new RegExp(/^4\d{12}(?:\d{3})?$/);
//     if(regexcard.test(cardnumberinfo.value)){
//         alert("numero valide");

// };
// var regexcard = cardnumberinfo.test(/^4\d{12}(?:\d{3})?$/);

// cardnumberinfo.alert = () => {
//         if (/^4\d{12}(?:\d{3})?$/.test(cardnumberinfo)){
//         alert("numero valide");
//     } 
//     else {
//         alert("numero invalide");
//     }
// };

titulaireinfo.addEventListener('input', () => {
    cardnamep.innerHTML = titulaireinfo.value;
});
expiration.addEventListener('input', () => {
    carddatep.innerHTML = expiration.value;
    // If 2 numbers, then display "/"
    if(expiration.value.length===2){
        expiration.value+="/";
    }
});
crypto.addEventListener('input', () => {
    cvc.innerHTML = crypto.value;


});

                                            // Flip when click CVC
crypto.onfocus = () => {
    card.style.transform = "rotateY(180deg)";
};
crypto.onblur = () => {
    card.style.transform = "rotateY(0deg)";
};
