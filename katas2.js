// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
    return num1 + num2
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2) {
    let soma = num1

    for (var i = 1; i < num2; i++) {
        soma += num1
    }
    // if (num1 === 0 || num2 === 0) {
    //     return 0
    // }
    return soma    
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let total = x

    for (let i = 1; i < n; i++) {
        total = multiply(total, x)
    }
    return total
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
// inicie um numero
function factorial(num) {

    for (let i = num - 1; i >= 1; i--) {
        num = multiply(num, i)
    }
    return num
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

// descomente a linha seguinte para testar sua função
