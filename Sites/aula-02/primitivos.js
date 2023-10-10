let teste = undefined; // 
let teste2 = null; // nullable/void
let teste3 =  ""; //string sem nada
let teste4 = " "; // string com um espaço

let boleano1 = true;
let boleano2 = false;

let boleano3 = 1;
let boleano4 = 0;

//string
let nome = '\n'; //string literal - performance melhor
let nome2 = "\n";
//let nome3 = $`{}`;

//NAN -> Que não é um número
let inteiro = 1;
let decimal = 0.5; //double [precision]

//NAN
let naoNumero = NaN;
//naoNumero = "infinity" * 5; //NaN

let numero1 = 1;
let numero2 = "infinity";

let infinito1 = Infinity;
let infinito2 = -Infinity;

//Complexos
let carro = {
    numeroDoRenavam: 'dsdsadsad',
    enderecoDoCarro: {
        estado: 'RJ',
        cidade: 'Rio',
        cep: '97841-158',
        bairro: '156511',
        outra : [
            {teste:1},
            {teste:2},
            {teste:3}
        ]
    }
}

// Lista de Daddos
// Array Simples
// Array de objetos ou definido por um objeto

let arraySimples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayObjeto = new Array();
let ArrayObjeto = [
    carro,
    carro,
    carro,
    carro
];

//console.log(ArrayObjeto[0].enderecoDoCarro.outra[1]);
//console.log(ArrayObjeto[0]["enderecoDoCarro"].outra[1]);

let diasSemana =  ['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'];

for (let i = 0; i < diasSemana.length; i++){
    console.log(i + ": " + diasSemana[i]);
}

//Funcao
let segundaFuncao = (value1, value2) => value1 + value2;
let primeiraFuncao = function (value1, value2){
    return {
        calcular: segundaFuncao(value1, value2)
    }
};

let result = primeiraFuncao(1,2);
console.log(result);

