let nome = window.document.getElementById('txtnome') // o melhor nao e criar variavel global, mas criei para a funcao limpar ter acesso
let alt = window.document.getElementById('txtaltura')
let peso = window.document.getElementById('txtpeso')
let res = window.document.getElementById('res')
res.style.fontStyle = "italic"

function calcular(){
let npeso = Number(peso.value) 
let nalt = Number(alt.value)
let imc = npeso/((nalt/100)**2)
let classificacao = ''
if (nome.value==0 || Number(peso.value) == 0 || Number(alt.value) == 0) {
   window.alert ('Preencha os dados corretamente!')
}else if(imc <16){
    classificacao = 'de Magreza Grau III'
}else if (imc < 16.9){
    classificacao ='de Magreza Grau II'
}else if (imc < 18.4){
    classificacao = 'de Magreza Grau I'
}else if (imc < 24.9){
    classificacao = 'adequadas'
}else if (imc < 29.9){
    classificacao = 'de pre-obesidade'
}else if (imc < 34.9){
    classificacao = 'de Obesidade Grau I'
}else if (imc < 39.9){
    classificacao ='de Obesidade Grau II'
}else {
    classificacao = 'de Obesidade Grau III'
}
res.innerHTML = `${nome.value} o seu IMC e de ${imc.toFixed(2)} e indica que voce esta em condicoes ${classificacao}. Porem e preciso avaliar
    seu fisico como um todo.`
}

function limpar(){
nome.value = ""
peso.value = ""
alt.value = ""
res.innerHTML = "O resultado aparecera aqui!"

}

let limp = window.document.getElementById("limp")
limp.style.backgroundColor = "black"
limp.style.color ="rgb(255, 166, 0)"
limp.style.borderRadius= "10px"
limp.style.width = "200px"
limp.style.height = "45px"
limp.style.borderColor = "rgb(255, 166, 0)"
limp.style.fontSize = "15pt"
limp.style.fontStyle = "normal"
limp.style.fontFamily = "Arial"