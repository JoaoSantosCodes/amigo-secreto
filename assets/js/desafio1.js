// 1. Função para validar se um número é positivo, negativo ou zero:
function validarNumero(n) {
    if (n > 0) {
        return 'Positivo';
    } else if (n < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
}

// 2. Função para verificar se uma pessoa é maior de idade:
function verificarMaiorIdade(idade) {
    return idade >= 18;
}

// 3. Função para validar se uma string é vazia ou não:
function validarStringVazia(str) {
    return str === '' ? 'Vazia' : 'Não vazia';
}

// 4. Função para determinar se um ano é bissexto:
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// 5. Função para calcular a média de dois números, interrompendo a execução se algum dos números não for válido:
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Números inválidos, interrompendo a execução.';
    } else {
        return (num1 + num2) / 2;
    }
}

// 6. Função para retornar o tamanho de um array:
function tamanhoDoArray(arr) {
    return arr.length;
}

// 7. Utilizar a função `includes` para verificar se um elemento específico está presente em um array:
let meuArray = [1, 2, 3, 4, 5];
let elementoProcurado = 3;
let estaPresente = meuArray.includes(elementoProcurado);

// 8. Função para verificar se um elemento está presente em um array:
function elementoEstaPresente(arr, elemento) {
    return arr.includes(elemento);
}

// 9. Utilizar `includes` para verificar se uma determinada string está presente em um array de strings:
let arrayDeStrings = ['apple', 'banana', 'orange'];
let stringProcurada = 'banana';
let estaPresenteString = arrayDeStrings.includes(stringProcurada);

// 10. Função para verificar se um estudante está presente em um array de objetos:
function estudanteEstaPresente(arrayDeEstudantes, estudanteProcurado) {
    return arrayDeEstudantes.some(estudante => estudante.id === estudanteProcurado.id);
}

// 11. Função para calcular a soma dos elementos pares e o produto dos elementos ímpares em um array de números:
function calcularSomaEProduto(arrayDeNumeros) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of arrayDeNumeros) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return { somaPares, produtoImpares };
}
