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
});

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
crypto.onfocus = function () {
    card.style.transform = "rotateY(180deg)";
};
crypto.onblur = function () {
    card.style.transform = "rotateY(0deg)";
};
