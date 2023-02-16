// const numero = 675;
// const numeroString = Number("675");

  //conversão implicita 
//console.log(numero === numeroString)

//converão explicita
//console.log(numero == numeroString) 

// console.log(numero + Number(numeroString));

//Para fazer a soma precisa adiconar Number() String()
//console.log(numero + number(numeroString))

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.