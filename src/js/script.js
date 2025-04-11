// DECLARAÇÃO E VARIAVEIS

var nome ="Fiap";
console.log(nome)

let idade ="19"
console.log(idade)

const sobrenome ="Fiapinho"
console.log(sobrenome)

// undefined

let exemplo;
console.log(exemplo)

// null

let exemplo1 =null
console.log(exemplo1)

// TIPOS DE VARIAVEIS

let ex1 ="Fiap";
console.log(typeof ex1)

let ex2 =25;
console.log(typeof ex2)

let ex3 =true;
console.log(typeof ex3)

let ex4={};
console.log(typeof ex4)

let ex5=[];
console.log(typeof ex5)

//Conversões

//FLOAT => STRING

let numFloat = 123.456
console.log(numFloat.toString())

//STRING => FLOAT
let numString ="12.963";
console.log(parseFloat(numString))

//INT => STRING
let numINT ="20.87";
console.log(numINT.toString())

//STRING => INT
let numString2 ="120";
console.log(parseInt(numString2))

//METODOS

//METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase="O mundo da tecnologia";
console.log(frase.length)

//MEtoDO indexof - RETORNA UM TRECHO DO SEU CÒDIGO

let texto ="Programação sustentável";
console.log(texto.lastIndexOf('ão'))

//METODO SLICE - RETORNa PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
let info ="Programação de ponta";
console.log(info.slice(14,20))

//OPERADORES ARITIMÉTICOS

const a=10
const b=20

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//OPERADORES LÓGICOS

const c=20;
const d=30;

console.log(c > d);
console.log(c > d && c< 10);
console.log(c > d || d > c);
console.log(c == d || d <= c);

//OPERADORES DE COMPARAÇÃO

const e=10
const f=30

// console.log(e == f);
// console.log(e === f);
// console.log(e != f);

// CONDICIONAL

//if

if(true){
    console.log("é verdadeiro")
}

let exemplo2 = 1
if(exemplo2 ==1){
    console.log("esta correto")
}
//if/else

let nome2 ="fiap";

if(nome =="fiap"){
    console.log("Nome Correto")
    //document.write("Nome Certo")
}
else{
    console.log("Nome Errado")
    //document.write("Nome Errado")
}

//if encadiado ou aninhado

let idade2 =13;
if(idade2 <=14){
    console.log("Não pode Entrar é menor")
}
else if(idade2 >14 && idade2 <=18){
    console.log("Pode entrar e curtir")
}
else if(idade2 >18 && idade2 <=50){
    console.log("perigo seus pais estão na balada")
}
else{
    console.log("você deve ficar no sofa assistndo netflix")
}

//switch case

let time ="Santos";

switch(time){
case "Santos":
    console.log("melhor time")
    break;
case "São Paulo":
    console.log("É tão rui que não ganha em casa")
    break;
case "Palmeiras":
    console.log("Simplesmente horrivel")
    break;
default:
    console.log("Nenhuma das opções validas(Corinthians)") 
}

//Ternario

let valor=100;
let resultado = valor ==100 ? "Valor certo": "Valor Errado";
console.log(resultado);

let media=60;
let nota = media >=60 ? "passou de ano": "Não passou de ano"
console.log(nota)




