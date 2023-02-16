// function calculaDelta(a, b, c){
//     //DELTA = B AO QUADRADO - 4 * A * C
//     let delta;
//     delta = b * b;   
//      delta = Math.pow(b, 2)
//     delta = delta - 4 * a * c;
//     return delta;
// }

// console.log(calculaDelta(1, 2, 3));


// let x = "";
// console.log(x);
// x = "oi"

// DECLARAÇÃO DE FUNÇÕES

// 1) Declara a função 

function imprimeTexto(texto){

    console.log(texto)
}

// 2) executa a função (1 ou  + vezes)

imprimeTexto(soma());
// imprimeTexto("outro texto")
// três formas de escrever funções 

function soma(){
    return 2 + 2;       
    // return tem que ser a ultima coisa antes de fechar o bloco
}

