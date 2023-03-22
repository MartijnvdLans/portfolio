/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var audio = new Audio('./wiel.wav');
var currentMoney = 500;
var gekozenWaarde;
var gekozenKleur;
var winningNumber;
var blackNumber = false;
var redNumber = false;
var first18 = false;
var last18 = false;
var pair = false;
var impair = false;
var first12 = false;
var second12 = false;
var third12 = false;
var hidden = false;
var spinning = false;

var RouletteTafel = document.querySelector('#tafel');
var rouletteBal = document.querySelector('#ball');
var lockMoney = document.querySelector('h1');
var resultaat = document.querySelector('h4');
var animatieResultaat = document.querySelector('h2');
var error = document.querySelector('h3');
var errorMessage = document.querySelector('p');


function reset() {
    RouletteTafel.classList.remove('draai');    
    rouletteBal.classList.remove('draaibal'); 
    document.querySelector('.input').style.visibility = 'visible';
    document.querySelector('.input').value = ''; 
    error.textContent = ' ';    
    animatieResultaat.classList.remove('subtract');
    document.querySelector('.hider').style.visibility = 'hidden';    
    animatieResultaat.classList.remove('winst');   
    resultaat.style.visibility = 'hidden';
    spinning = false;
    
    if (lockMoney.textContent == "€0") {
        document.querySelector('#money').style.visibility = 'visible';
    }
}


function resetMoney() {
    var subtract = document.querySelector('.input').value;
    
   if (spinning === false) {
       var mistakeCorrection;
    mistakeCorrection = currentMoney + subtract/2*2;
    
    currentMoney = mistakeCorrection;
    document.querySelector('.input').style.visibility = 'visible';
        
    lockMoney.textContent = "€"+mistakeCorrection;        
    error.textContent = ' ';
   }
}

function checkWin() {
    var subtract = document.querySelector('.input').value;
    var winst;
    
    if (gekozenWaarde == winningNumber) {            
        winst = currentMoney + subtract * 37;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 37;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract*36+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        }
    else if (gekozenKleur == 'Red' && redNumber === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    else if (gekozenKleur == 'Black' && blackNumber === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == '1st 18' && first18 === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == 'Last 18' && last18 === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == 'Pair' && pair === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == 'Impair' && impair === true) {
        winst = currentMoney + subtract * 2;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 2;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == '1st 12' && first12 === true) {
        winst = currentMoney + subtract * 3;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 3;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract*2+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == '2nd 12' && second12 === true) {
        winst = currentMoney + subtract * 3;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 3;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract*2+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else if (gekozenKleur == '3rd 12' && third12 === true) {
        winst = currentMoney + subtract * 3;
        
        currentMoney = winst;
        lockMoney.textContent = '€' + winst;
        
        animatieResultaat.textContent = '+€'+subtract * 3;
        
        animatieResultaat.classList.add('winst');
        
        resultaat.style.color = 'green';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract*2+ ' gewonnen!' ;
        
        setTimeout(reset, 5000);
        
    }
    
    else {
        setTimeout(reset, 5000);
        
        resultaat.style.color = '#ba131a';
        resultaat.style.visibility = 'visible';
         resultaat.textContent = 'Je hebt €'+subtract+ ' verloren!' ;
    }
}

function draai(event) {
    var subtract = document.querySelector('.input').value;
    var pushedButton = event.target.textContent;
    
    if (document.querySelector('.input').value !== 0 && hidden === true) {
       spinning = true; document.querySelector('.input').style.visibility = 'hidden';
        
        error.textContent = "€"+ subtract+ " op " + pushedButton;
        
        var plaatjesArray = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png'];
var rouletteDraai = plaatjesArray[Math.floor(Math.random() * 37)];        
        winningNumber = rouletteDraai;
        gekozenWaarde = pushedButton +'.png';  
        audio.play();
        var pushedColor = event.target.textContent;
        gekozenKleur = pushedColor;
        hidden = false;
        
        if (winningNumber == '0.png') {
            redNumber = false;
            blackNumber = false;
            first18 = false;
            last18 = false;
            first12 = false;
            second12 = false;
            third12 = false;
            pair = false;
            impair = false;
        }
        
        if (winningNumber == '1.png' || winningNumber == '3.png' || winningNumber == '5.png' || winningNumber == '7.png' || winningNumber == '9.png' || winningNumber == '12.png' || winningNumber == '14.png' || winningNumber == '16.png' || winningNumber == '18.png' || winningNumber == '19.png' || winningNumber == '21.png' || winningNumber == '23.png' || winningNumber == '25.png' || winningNumber == '27.png' || winningNumber == '30.png' || winningNumber == '32.png' || winningNumber == '34.png' || winningNumber == '36.png') {
            redNumber = true;
            blackNumber = false;
            }
        if (winningNumber == '2.png' || winningNumber == '4.png' || winningNumber == '6.png' || winningNumber == '8.png' || winningNumber == '10.png' || winningNumber == '11.png' || winningNumber == '13.png' || winningNumber == '15.png' || winningNumber == '17.png' || winningNumber == '20.png' || winningNumber == '22.png' || winningNumber == '24.png' || winningNumber == '25.png' || winningNumber == '28.png' || winningNumber == '29.png' || winningNumber == '31.png' || winningNumber == '33.png' || winningNumber == '35.png') {
            redNumber = false;
            blackNumber = true;
        }
        
        if (winningNumber == '1.png' || winningNumber == '2.png' || winningNumber == '3.png' || winningNumber == '4.png' || winningNumber == '5.png' || winningNumber == '6.png' || winningNumber == '7.png' || winningNumber == '8.png' || winningNumber == '9.png' || winningNumber == '10.png' || winningNumber == '11.png' || winningNumber == '12.png' || winningNumber == '13.png' || winningNumber == '14.png' || winningNumber == '15.png' || winningNumber == '16.png' || winningNumber == '17.png' || winningNumber == '18.png') {
            first18 = true;
            last18 = false;
        }
        if (winningNumber == '19.png' || winningNumber == '20.png' || winningNumber == '21.png' || winningNumber == '22.png' || winningNumber == '23.png' || winningNumber == '24.png' || winningNumber == '25.png' || winningNumber == '26.png' || winningNumber == '27.png' || winningNumber == '28.png' || winningNumber == '29.png' || winningNumber == '30.png' || winningNumber == '31.png' || winningNumber == '32.png' || winningNumber == '33.png' || winningNumber == '34.png' || winningNumber == '35.png' || winningNumber == '36.png') {
            first18 = false;
            last18 = true;
        }
        
        if (winningNumber == '1.png' || winningNumber == '3.png' || winningNumber == '5.png' || winningNumber == '7.png' || winningNumber == '9.png' || winningNumber == '11.png' || winningNumber == '13.png' || winningNumber == '15.png' || winningNumber == '17.png' || winningNumber == '19.png' || winningNumber == '21.png' || winningNumber == '23.png' || winningNumber == '25.png' || winningNumber == '27.png' || winningNumber == '29.png' || winningNumber == '31.png' || winningNumber == '33.png' || winningNumber == '35.png') {
            pair = false;
            impair = true;
        }
        
        if (winningNumber == '2.png' || winningNumber == '4.png' || winningNumber == '6.png' || winningNumber == '8.png' || winningNumber == '10.png' || winningNumber == '12.png' || winningNumber == '14.png' || winningNumber == '16.png' || winningNumber == '18.png' || winningNumber == '20.png' || winningNumber == '22.png' || winningNumber == '24.png' || winningNumber == '26.png' || winningNumber == '28.png' || winningNumber == '30.png' || winningNumber == '32.png' || winningNumber == '34.png' || winningNumber == '36.png') {
            pair = true;
            impair = false;
        }
        
        if (winningNumber == '1.png' || winningNumber == '4.png' || winningNumber == '7.png' || winningNumber == '10.png' || winningNumber == '13.png' || winningNumber == '16.png' || winningNumber == '19.png' || winningNumber == '22.png' || winningNumber == '25.png' || winningNumber == '28.png' || winningNumber == '31.png' || winningNumber == '34.png') {
            first12 = true;
            second12 = false;
            third12 = false;
        }
        
        if (winningNumber == '2.png' || winningNumber == '5.png' || winningNumber == '8.png' || winningNumber == '11.png' || winningNumber == '14.png' || winningNumber == '17.png' || winningNumber == '20.png' || winningNumber == '23.png' || winningNumber == '26.png' || winningNumber == '29.png' || winningNumber == '32.png' || winningNumber == '35.png') {
            first12 = false;
            second12 = true;
            third12 = false;
        }
        
        if (winningNumber == '3.png' || winningNumber == '6.png' || winningNumber == '9.png' || winningNumber == '12.png' || winningNumber == '15.png' || winningNumber == '18.png' || winningNumber == '21.png' || winningNumber == '24.png' || winningNumber == '27.png' || winningNumber == '30.png' || winningNumber == '33.png' || winningNumber == '36.png') {
            first12 = false;
            second12 = false;
            third12 = true;
        }
        document.querySelector('.hider').style.visibility = 'visible';
        document.querySelector('img').classList.add('draai');
        
        
    
    document.querySelectorAll('img')[1].classList.add('draaibal');
    
    document.getElementById('ball').style.visibility = 'visible';    
    
    document.querySelector("img").src = './images/' + rouletteDraai;
    
    setTimeout(checkWin, 11000);
    }
    else {
        errorMessage.textContent = 'Je moet geld inzetten om te spelen! Voer een bedrag in en druk op enter!';
      document.querySelector('.input').style.border = '2px solid #ba131a';
    }

    
}

function verwerkFormulier(event) {
    event.preventDefault();
    var subtract = document.querySelector('.input').value;
    var newMoney = currentMoney - subtract;
    
    if (subtract > currentMoney || subtract < 1 || currentMoney == 'undefined') {
      errorMessage.textContent = 'Je inzet moet tussen de 1 en de ' + currentMoney + ' zijn!';
      document.querySelector('.input').style.border = '2px solid #ba131a';
        
  }
    else {
        
        errorMessage.textContent = ' ';
        
        document.querySelector('.input').style.border = '2px solid green';
       lockMoney.textContent = '€' + newMoney;
    
    currentMoney = newMoney;
                animatieResultaat.textContent = '-€'+subtract;
        
        document.querySelector('.input').style.visibility = 'hidden';
        
        error.textContent = subtract;
        
        animatieResultaat.classList.add('subtract');
        hidden = true;
    }    
}

function verwerkNaam(preset) {
    preset.preventDefault();
    var chosenName = document.querySelector('.gekozen_naam').value;
    var displayName = document.querySelector('h5');
    var inputScreen = document.querySelector('.choose_name');
    
    displayName.textContent = chosenName;
    
    inputScreen.style.visibility = 'hidden';
    
}

function beginOpnieuw(amount) {
    amount = amount.target.textContent;
    
    currentMoney = amount;
    lockMoney.textContent = '€'+amount;
    
    document.querySelector('#money').style.visibility = 'hidden';
    
}

function profilePicture(picture) {
    picture = picture.target.id;
    document.querySelector('.playericon').src = 'images/'+picture+'.png';
    document.querySelector('.choose_player').style.visibility = 'hidden';
    
    console.log(picture);
}

document.querySelector('#form').addEventListener('submit',verwerkFormulier);
document.querySelector('#gebruikersnaam').addEventListener('submit',verwerkNaam);

document.querySelector("#zero").addEventListener("click", draai);
document.querySelector("#one").addEventListener("click", draai);
document.querySelector("#two").addEventListener("click", draai);
document.querySelector("#three").addEventListener("click", draai);
document.querySelector("#four").addEventListener("click", draai);
document.querySelector("#five").addEventListener("click", draai);
document.querySelector("#six").addEventListener("click", draai);
document.querySelector("#seven").addEventListener("click", draai);
document.querySelector("#eight").addEventListener("click", draai);
document.querySelector("#nine").addEventListener("click", draai);
document.querySelector("#ten").addEventListener("click", draai);
document.querySelector("#eleven").addEventListener("click", draai);
document.querySelector("#twelve").addEventListener("click", draai);
document.querySelector("#dertien").addEventListener("click", draai);
document.querySelector("#fourteen").addEventListener("click", draai);
document.querySelector("#fifteen").addEventListener("click", draai);
document.querySelector("#sixteen").addEventListener("click", draai);
document.querySelector("#seventeen").addEventListener("click", draai);
document.querySelector("#eightteen").addEventListener("click", draai);
document.querySelector("#nineteen").addEventListener("click", draai);
document.querySelector("#twenty").addEventListener("click", draai);
document.querySelector("#twentyone").addEventListener("click", draai);
document.querySelector("#twentytwo").addEventListener("click", draai);
document.querySelector("#twentythree").addEventListener("click", draai);
document.querySelector("#twentyfour").addEventListener("click", draai);
document.querySelector("#twentyfive").addEventListener("click", draai);
document.querySelector("#twentysix").addEventListener("click", draai);
document.querySelector("#twentyseven").addEventListener("click", draai);
document.querySelector("#twentyeight").addEventListener("click", draai);
document.querySelector("#twentynine").addEventListener("click", draai);
document.querySelector("#thirty").addEventListener("click", draai);
document.querySelector("#thirtyone").addEventListener("click", draai);
document.querySelector("#thirtytwo").addEventListener("click", draai);
document.querySelector("#thirtythree").addEventListener("click", draai);
document.querySelector("#thirtyfour").addEventListener("click", draai);
document.querySelector("#thirtyfive").addEventListener("click", draai);
document.querySelector("#thirtysix").addEventListener("click", draai);
document.querySelector("#red").addEventListener("click", draai);
document.querySelector("#black").addEventListener("click", draai);
document.querySelector("#pair").addEventListener("click", draai);
document.querySelector("#impair").addEventListener("click", draai);
document.querySelector("#firsteightteen").addEventListener("click", draai);
document.querySelector("#lasteightteen").addEventListener("click", draai);
document.querySelector("#firsttwelve").addEventListener("click", draai);
document.querySelector("#secondtwelve").addEventListener("click", draai);
document.querySelector("#thirdtwelve").addEventListener("click", draai);

document.querySelector("#eeneuro").addEventListener("click", beginOpnieuw);
document.querySelector("#tweeeuro").addEventListener("click", beginOpnieuw);
document.querySelector("#drieeuro").addEventListener("click", beginOpnieuw);

document.querySelector("#Pikachu").addEventListener("click", profilePicture);
document.querySelector("#Charmander").addEventListener("click", profilePicture);
document.querySelector("#Bulbasaur").addEventListener("click", profilePicture);
document.querySelector("#Squirtle").addEventListener("click", profilePicture);

error.addEventListener("dblclick", resetMoney);


// Bronnen afbeeldingen :
// Roulette: https://www.roulettespelencasino.nl/wp-content/uploads/2017/01/roulette-300x300.png
// Pikachu : https://vignette.wikia.nocookie.net/pokeone/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/340?cb=20180916045441
// Bulbasaur: https://vignette.wikia.nocookie.net/pokemon-fighters-ex-roblox/images/a/ae/H001.png/revision/latest/scale-to-width-down/340?cb=20170918200954
// Squirtle: https://vignette.wikia.nocookie.net/pkmnshuffle/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/340?cb=20170407192452
// Charmander: https://vignette.wikia.nocookie.net/pkmnshuffle/images/5/56/Charmander.png/revision/latest/scale-to-width-down/340?cb=20170407191539