var capturando =""
function capture (){
capturando = document.getElementById('valor').value;
document.getElementById('value-one').innerHTML = capturando;
}
var capturando2 =""
function capture2 (){
capturando2 = document.getElementById('valor2').value;
document.getElementById('value-two').innerHTML = capturando2;
}

function copyToClipboard(){
    let input;
    input = document.getElementsByClassName('txt').value;
    navigator.clipboard.writeText("Anfitrião" + ": " + capturando + " - " + "Coanfitrião" + ": " + capturando2) //tratamento de erro =>
    .then(res => alert("Copiado com Sucesso")) 
    .catch(err => alert("O item não foi Copiado. Tente Novamente!"))
    }
    /* Desenvolvido Por David Borba */ 

