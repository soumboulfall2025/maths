let operationUno = document.getElementById('operation-1')
let operationTwo = document.getElementById('operation-2')
let operationThree = document.getElementById('operation-3')
let operationFour = document.getElementById('operation-4')
let monTitre = document.querySelector('h1')

//------------------------------------------------

let entrer = document.querySelector('input')
let entrer1 = document.querySelector('#entrer-1')
let entrer2 = document.querySelector('#entrer-2')
let entrer3 = document.querySelector('#entrer-3')

console.log(monTitre);


//------------------------------------------------

//Visiblite des media

operationUno.addEventListener('click', (e) => {
    entrer.classList.toggle('input')
    entrer.style.background = 'pink'
    entrer.style.color = 'white'
})

operationTwo.addEventListener('click', (e) => {
    entrer1.classList.add('input')
    entrer1.style.background = 'pink'
})


//------------------------------------------------
// Modification du titre
monTitre.textContent = 'Mathematiques :'
monTitre.addEventListener('click', () => {
    monTitre.classList.add('h1')
    
})





//------------------------------------------------
// Operations Mathematiques

//Operation uno

function multiply(a, b) {
    return a * b;
}
operationUno.addEventListener('click', () => {
    let a = 10
    let b = 3
    let result = multiply(a, b);
    console.log(result);

})
multiply()

//Operation two
function addition(a, b) {
    return a + b
}

operationTwo.addEventListener('click', () => {
    let a = 12
    let b = 14
    let c = a + b
    console.log(c);

})

addition()

//Operation three
let d = 0

operationThree.addEventListener('click', () => {
    d++
    console.log(d);
    if (d == 1) {
        operationThree.style.background = 'green'
        operationThree.style.color = 'white'
    } else {
        operationThree.style.background = 'red'
        operationThree.style.color = 'white'
    }
    entrer2.classList.toggle('input')
    entrer2.style.background = 'pink'
})

// Operation four
operationFour.addEventListener('click', () => {
    let d = 1; // en radians
    let cosD = Math.cos(d);

    console.log("cos(1) =", cosD);

    entrer3.classList.toggle('input')
    entrer3.style.background = 'pink'

})

//--------------------------------------------------------------
let heure = document.getElementById('date')
let jour = document.getElementById('jour')
let heure1 = document.getElementById('bonjour2')
let jourSemana = document.getElementById('semana')


// Affichage de la date

heure.addEventListener('click', ()=>{
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth() + 1; // Les mois commencent à 0
    let annee = date.getFullYear();
    let heureActuelle = date.getHours();
    let minuteActuelle = date.getMinutes();
    let secondeActuelle = date.getSeconds();

    heure.classList.add('date')

    console.log("Date actuelle : " + jour + "/" + mois + "/" + annee);
    console.log("Heure actuelle : " + heureActuelle + ":" + minuteActuelle + ":" + secondeActuelle);
})

// heure 

function salutation (){
    let hey = ''
    return hey
}


jour.addEventListener('click', ()=>{
    let hey = 'Bonsoir'
    if(hey == 'Bonsoir'){
        console.log('Bonsoir');
    }
    else{
        console.log('Bonjour');
        
    }
    jourSemana.classList.add('heureDate')
    
})
salutation()

let hours = new Date()
let heureAct = hours.getHours()

heure1.addEventListener('click', ()=>{
    if(heureAct > 17){
        console.log(`il est ${heureAct}`);
    }
    else if(heureAct <= 18){
        console.log("il est : 18h");
    }
    else{
        console.log('il est midi : 12h');
        
    }
})

// affichage jour de la semaine

let semaine = ["lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi"]

let hora = new Date()

jourSemana.addEventListener('click', ()=>{
    switch(semaine[hora.getDay() - 1]) {
        case "lundi":
            console.log("debut de semaine")
            break
        case "mardi" :
            console.log("deuxième jour de la semaine")
            break
        case "mercredi" :
            console.log("troisieme jour de la semaine")
            break
        case "jeudi" :
            console.log("on est le jeudi")
            break
        case "vendredi" :
            console.log("on est le vendredi");
            break
        default:
            console.log("jour non spécifié");
    }
})