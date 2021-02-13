// Ejercicio 4

function sumaRest(num1, num2, ...num3) {
    let resultado = num1 + num2;

    num3.forEach(n=> {
        resultado += n;
    });
    return console.log(resultado);
}

sumaRest(3,2);
sumaRest(1,2,3,4);
