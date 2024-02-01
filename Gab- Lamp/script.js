turnOn.addEventListener('click', ligar)
turnOff.addEventListener('click', desligar)
lamp.addEventListener('click', quebra)
lamp.addEventListener('mouseenter', ligar)
lamp.addEventListener('mouseout', desligar)
reset.addEventListener('click', consertar)
let c = 0
let ofligar = true
let ofdesligar = true
let quad = window.document.getElementById('quad')

function ligar(){
    if (ofligar == true){
    lamp.src = './img/ligada.jpg'
    quad.style.backgroundColor = 'white'
    estado.innerHTML= 'A lampada esta acesa!'
    estado.style.color= 'black'
    body.style.backgroundColor = 'white'
    nome.style.color='black'
}
}

function desligar(){
    if (ofdesligar == true){
    lamp.src = './img/desligada.jpg'
    quad.style.backgroundColor = 'black'
    estado.innerHTML= 'A lampada esta apagada!'
    estado.style.color= 'white'
    body.style.backgroundColor = 'black'
    nome.style.color='white'
    
}
}

function quebra (){
c +=1

if(c==2){
    ofligar = false
    ofdesligar = false
    let liga = document.getElementById('turnOn')
    let desli = document.getElementById('turnOff')
    lamp.src = './img/quebrada.jpg'
    turnOn.disable = true
    turnOff.disable = true
    quad.style.backgroundColor = 'black'
    estado.innerHTML= 'A lampada esta quebrada!'
    estado.style.color= 'white'
    body.style.backgroundColor = 'black'
    nome.style.color='white'

}
}

function consertar(){
    location.reload()
}



