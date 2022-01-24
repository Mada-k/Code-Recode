var labelIncremento = document.querySelector('.incremento');
var inputIncremento = document.getElementById('numero');
var escolher = document.querySelector('.escolha');//seleciona a tag select pela classe.
escolher.addEventListener('click', function(){ //aqui criamos o evento de que quando clicar no cifra de Cesar ele vai aparecer o incremento ou não.
    if(escolher.value == "cesar"){
        labelIncremento.style.display = "flex"; //aqui eu tô dizendo para a var inputIncremento alterar a propriedade para display flex, pelo style.
        inputIncremento.style.display="flex";
    } else{
        labelIncremento.style.display ="none";
        inputIncremento.style.display ="none";
    }
});

var botao = document.querySelector('.botao');
botao.addEventListener('click', function(){
    var inputRadio = document.getElementsByName('check');
    if(inputRadio[0].checked == true && escolher.value == "cesar"){
        cesar1();            
    } else if (inputRadio[1].checked == true && escolher.value == "cesar"){
        cesar2();
    } else if (inputRadio[0].checked == true && escolher.value == "base"){
        base1();
    } else if (inputRadio[1].checked == true && escolher.value == "base"){
        base2();
    }
})

    function cesar1 (){     
        var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var mensagem1 = document.querySelector('.primeiraMsg').value.toLowerCase();//o value tá pegando o valor que vai ser digitado dentro de textArea pela classe primeiraMsg. depois converte para minúsculo.
        var pegarIncremento = document.querySelector('#numero').value;
        var numInteiro = parseInt(pegarIncremento);
        //parseInt converte string p/ numero.
        var resultado = ""; 
        //a var resultado vai receber a mensagem com incremento//

        for(var i=0; i< mensagem1.length; i++){
            if(mensagem1[i] != " "){
                for(var c=0; c< alfabeto.length; c++){
                    if(mensagem1[i] == alfabeto[c]){
                        resultado = resultado + alfabeto[ ( c + numInteiro )% alfabeto.length ];
                    }
                }
            } else { 
                resultado = resultado + " ";
            }

        }
        document.querySelector('.segundaMsg').innerText = `${resultado}`;
    }


    function cesar2 (){
        var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var mensagem1 = document.querySelector('.primeiraMsg').value.toLowerCase();//o value tá pegando o valor que vai ser digitado dentro de textArea pela classe primeiraMsg. depois converte para minúsculo.
        var pegarIncremento = document.querySelector('#numero').value;
        var numInteiro = parseInt(pegarIncremento);
        //parseInt converte string p/ numero.
        var resultado = ""; 

        for(var i=0; i< mensagem1.length; i++){
            if(mensagem1[i] != " "){
                for(var d=0; d < alfabeto.length; d++){
                    if(mensagem1[i] == alfabeto[d] && (d - numInteiro) % alfabeto.length >= 0){
                        resultado = resultado + alfabeto[(d - numInteiro) % alfabeto.length];
                    } else if(mensagem1[i]== alfabeto[d] && (d - numInteiro) % alfabeto.length < 0){
                        resultado = resultado + alfabeto[ alfabeto.length + (d - numInteiro) % alfabeto.length];  
                    } else {
                        resultado = resultado + " ";
                    }
                }
            }
        } 
        document.querySelector('.segundaMsg').innerText = `${resultado}`;
    }


    function base1 (){
        var mensagem1 = document.querySelector('.primeiraMsg').value
        var resultado = btoa(mensagem1);
        document.querySelector('.segundaMsg').innerText = `${resultado}`;
    }
    
    function base2 (){
        var mensagem1 = document.querySelector('.primeiraMsg').value
        var resultado = atob(mensagem1);
        document.querySelector('.segundaMsg').innerText = `${resultado}`;
    }

    