let operationUno = document.getElementById('operation-1')
let operationTwo = document.getElementById('operation-2')
let entrer = document.querySelector('input')
let entrer1 = document.querySelector('#entrer-1')

console.log(entrer1);


//------------------------------------------------

//Visiblite des media

operationUno.addEventListener('click', (e) => {
    entrer.classList.toggle('input')
    entrer.style.background = 'pink'
    entrer.style.color = 'white'
})

operationTwo.addEventListener('click', (e)=>{
    entrer1.classList.add('input')
    entrer1.style.background = 'pink'
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


