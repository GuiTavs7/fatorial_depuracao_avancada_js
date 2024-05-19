// FUNÇÕES DO NOSSO CÓDIGO

function calcularFatorial(numero){
    let resultado = 1;

    for (let i = 1; i <= numero; i++){
        //console.log(" O valor de i é " + i);        
        resultado *= i;
        //console.log(" O valor de resultado é " + resultado);        
    }

    return resultado;
}

function imprimirFatorial(numero){

    const ehUmNumeroNegativo = numero < 0;

    if (ehUmNumeroNegativo){
        console.log("Não é possível calcular o fatorial de um número negativo!");
    }
    else{
        const fatorial = calcularFatorial(numero);
        console.log(" O fatorial de " + numero + " é " + fatorial);
    }
}

// INÍCIO DO CÓDIGO

const numero = 5;
imprimirFatorial(numero);  // EVOCANDO A FUNÇÃO COM O NOSSO NÚMERO (5)

// OBS: RETIRE os comentários do "console.log" para ver tudo pela depuração (F5) - Não se esqueça de adicionar o ponto de interrupção antes da linha da função