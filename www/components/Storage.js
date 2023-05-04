// This is a JavaScript file
var placa
var digitado
var proprietarionome

localStorage.setItem("EFQ-8H67","Paulo Eduardo Silva Montier")

localStorage.setItem("FAC-1723","José Carlos")

localStorage.setItem("EGT-3614","Felipe Canarozzo")

localStorage.setItem("DGJ-7567","Graciete Henrique")

function exibir(){
var exibir
digitado = document.getElementById('coletortexto').value
exibir = localStorage.getItem(digitado)
alert(exibir)

}


function cadastrar(){
placa = document.getElementById('placa').value
proprietarionome = document.getElementById('proprietario').value


localStorage.setItem(placa, proprietarionome)


}