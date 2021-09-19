/*-Se a data do evento for posterior à data atual, permitir o evento;
senão, alertar que o cadastro não será permitido por data inválida.*/

console.log("-----------------------------------------")

var dataDia = 30


if (dataDia <=25) {
    console.log("Cadastro válido !")

}else{
    console.log("Cadastro inválido")
    console.log("A data de inscrição é do dia 1 até dia 25")
    
}

console.log("FIM")

/*-Se o participante for maior de 18 anos, permitir o cadastro; 
senão, alertar que o cadastro não é permitido pela idade.*/

console.log("-----------------------------------------")

var idade = 15

if (idade<18) {
    console.log("sua idade é de " +idade+ " anos.")
    
    console.log("idade não permitida para cadastro, ter no minimo 18 anos para cadastrar.")

}else{
    console.log("Cadastro feito !")

}

console.log("FIM")

console.log("-----------------------------------------")

//Outro Exemplo para o mesmo problema -----------------

var anoNascimento = 2006
const anoAtual = 2021
var idade2 = anoAtual-anoNascimento

if(idade2>= 18){

    console.log("Cadastro feito !")

}else{
    console.log("sua idade é de " +idade2+ " anos.")

    console.log("idade não permitida para cadastro, ter no minimo 18 anos para cadastrar.")
}

console.log("FIM")

console.log("-----------------------------------------")

//-Listar participantes e palestrantes por evento.

/*-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; 
senão, alertar que o cadastro não será permitido por ter excedido o limite.*/

console.log("20 Palestrantes por evento")

console.log("100 Paticipantes por evento")


console.log("-----------------------------------------")


var participanteNumero = 78

if (participanteNumero <=100) {
    
    console.log("Você é o participante número: " +participanteNumero)
    
    console.log("Cadastro feito")

}else{
    console.log("Cadastro NÃO permitido - Limite de participantes excedido")

}

console.log("FIM")

console.log("-----------------------------------------")
